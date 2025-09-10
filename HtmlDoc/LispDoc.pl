#-------------------------------------------------------------------------
#
#  File Name   :  LispDoc.pl
#
#  Description :
#
#   This module  creates a html  single page applicaton  which documents
#   the main components of lisp files in a directory tree.
#
#   It parses some elements like:
#
#   - defun
#   - defclass
#   - defconst
#   - defcustom
#   - defvar
#   - defmacro
#   - defsubst
#   - defmethod or cl-defmethod
#
#   TODO : - adding def-method after parsing
#
#  Developer : Oskar Leirich                Creation date : 29.Jul.2025
#  Modified  : Oskar Leirich                Last changes  : 08.Sep.2025
#
#  This scripts contains the following functions :
#    createDefines             createFileDef             createJsFiles
#    findBodyEnd               getItemBody               parseDefines
#    parseModules              readDir
#
#-------------------------------------------------------------------------

use lib './';

use strict;
use warnings;

use File::Basename;
use File::Copy;
use File::Find;
use File::Slurp;
use File::Path qw (make_path);
use Cwd qw ( cwd abs_path chdir );
use TextUtils;

my %packages;     # data structure for all filenames (packages)
my @inc;
my @file;         # is defined in TextUtils, but we use setFile
my @fileData;     # content of filesData, functions, defines etc.
my @lispFiles;    # data structure for all filenames
my %filenames;    # data structure for all filenames
my %classes;      # data structure for all class declarations
my %macros;       # data structure for all macro declarations
my %methods;      # data structure for all methods declarations
my %variables;    # data structure for all variable declarations
my %functions;    # data structure for all functions
my %prototypes;   # data structure for all function prototypes
my %modules;      # data structure for all classes
my %structs;      # data structure for all structs
my %substs;       # data structure for all substs
my %consts;       # data structure for all const definitions
my %defines;      # hash for defines
my %customs;      # hash for custom definitions (macro)
my %groups;       # hash for customization groups

my $curModule;
my $rootDir;
my $dataDir;
my $space8;
my $space10;
my $space12;

# variables for winword;
my $word;

$rootDir = $ARGV [0];
$dataDir = $ARGV [1];

if ( ! defined ($rootDir) )
{
  $rootDir = cwd ();
}

if ( ! defined ($dataDir) )
{
  $dataDir = cwd () . "/Html/data";
}

# convert backslash in path to normal slash
$rootDir =~ s#\\#/#g;
$dataDir =~ s#\\#/#g;
make_path ($dataDir);

# read the complete directory including subdirectories
find ( \&readDir, $rootDir );

# parse the class and functions definitions
parseModules ();

createJsFiles ();
createDefines ();

exit;

#-------------------------------------------------------------------------
#
#              S U B R O U T I N E S   S T A R T   H E R E
#
#-------------------------------------------------------------------------


#-------------------------------------------------------------------------
#
#  Function Name   :  createDefine
#
#  Description :
#
#   This function  creates a java  script file  for the given  define in
#   $defName in all lisp files, e.g. functions, defines, classes, macros
#   and others.
#
#-------------------------------------------------------------------------

sub createDefine
{
  my %defRef;
  my $defRef;
  my $defName;
  my $jsName;
  my $var;
  my $ref;
  my $text;
  my $item;
  my @refKeys;

  $jsName  = shift;
  $defRef  = shift;
  $defName = shift;

  $jsName = $dataDir . "/" . $jsName . ".js";

  @refKeys = keys %$defRef;
  @refKeys = sort ( @refKeys );

  return unless ( @refKeys > 0 );

  @fileData = ();

  $_ = $defName . "s";

  if ( $defName eq "class" )
  {
    $_ = "classes";
  }

  print "Writing data for $_ \tinto $jsName\n";

  $text = "const $_ =";

  push ( @fileData, $text );
  push ( @fileData, "  {" );
  push ( @fileData, "    names:" );
  push ( @fileData, "      [" );

  # print all names of this define (e.g. functions)
  for ( my $i = 0; $i < @refKeys; $i++ )
  {
    $item = $refKeys [$i];

    $ref = $defRef->{$item};
    $var = $ref->{ $defName };

    $_ = $space8 . "\'$var\'";

    if ( $i < ( @refKeys - 1 ) )  # not on last enty
    {
      $_ = $_ . ",";
    }

    push ( @fileData, $_ );
  }

  push ( @fileData, "    ],\n" );
  push ( @fileData, "    info:" );
  push ( @fileData, "      [" );

  # print all names of this define (e.g. functions)
  for ( my $i = 0; $i < @refKeys; $i++ )
  {
    $item = $refKeys [$i];

    $ref = $defRef->{$item};
    $var = $ref->{ $defName };

    push ( @fileData, $space8 . "{" );

    # define name, e.g. function
    $_ = $space10 . "$defName : \'$var\',";
    push ( @fileData, $_ );

    # file name
    $var = $ref->{ 'filename' };
    $_ = $space10 . "filename : \'$var\',";
    push ( @fileData, $_ );

    # doc string
    $var = $ref->{ 'doc' };

    if ( defined ($var) )
    {
      $var =~ s/\n/<br>/g;     # can be replaced later in javascript if necessary

      $_ = $space10 . "docstring : \'$var\',";
      push ( @fileData, $_ );
    }

    # prototype
    $var = $ref->{ 'prototype' };

    if ( defined ($var) )
    {
      $_ = $space10 . "prototype : \'$var\',";
      push ( @fileData, $_ );
    }

    # parameter
    $var = $ref->{ 'parameter' };

    if ( defined ($var) )
    {
      $_ = $space10 . "parameter : \'$var\',";
      push ( @fileData, $_ );
    }

    # lisp code - create also lisp code ?
    $_ = $ref->{ 'body' };

    s/\n/<br>/g;
    s/\"/<apo>/g;
    s/'/<tick>/g;        # apostrophe
    s/`/<backtick>/g;    # backtick

    $var = $space10 . "lispcode : \'$_\'";
    push ( @fileData, $var );

    $var = $space8 . "}";

    if ( $i < ( @refKeys - 1 ) )  # not on last enty
    {
      $var = $var . ",";
    }

    push ( @fileData, $var );
  }

  push ( @fileData, "    ]" );
  push ( @fileData, "  }" );

  $_ = join ( "\n", @fileData );

  write_file ( $jsName, $_ );

}               #----  createDefine  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  createDefines
#
#  Description :
#
#   This function  creates a java  script file  for every define  in all
#   lisp files, e.g. functions, defines, classes, macros and others.
#
#-------------------------------------------------------------------------

sub createDefines
{
  my %defRef;
  my $defRef;

  $defRef = \%macros;

  createDefine ( "Functions", \%functions, "function" );
  createDefine ( "Macros",    \%macros,    "macro"    );
  createDefine ( "Classes",   \%classes,   "class"   );
  createDefine ( "Methods",   \%methods,   "method"   );
  createDefine ( "Variables", \%variables, "variable" );
  createDefine ( "Constants", \%consts,    "constant" );
  createDefine ( "Groups",    \%groups,    "group"    );
  createDefine ( "Substs",    \%substs,    "subst"    );
  createDefine ( "Structs",   \%structs,   "struct"   );

}               #----  createDefines  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  createFileDef
#
#  Description :
#
#   This  function  writes the  defines  for  the  given file  into  the
#   fileData   array  which   will  be   written  into   the  javascript
#   file. Defines means functions, variables, macros, classes etc.
#
#-------------------------------------------------------------------------

sub createFileDef
{
  my %fileRef;
  my $fileRef;
  my $itemRef;
  my $ref;
  my $idx;
  my $var;
  my $item;
  my $title;
  my $defName;
  my @refKeys;

  $idx     = shift;
  $title   = shift;

  $defName = $title;  # for examples groups
  chop ($defName);    # remove last character --> group

  if ( $title eq "classes" )
  {
    $defName = "class";
  }

  $ref     = $lispFiles [$idx];
  $fileRef = $packages {$ref};

  $itemRef = $fileRef->{ $title };

  @refKeys = keys %$itemRef;
  @refKeys = sort ( @refKeys );

  return unless ( @refKeys > 0 );

  $_ = $space8 . $title . ":";
  push ( @fileData, $_ );

  $_ = $space10 . "[";
  push ( @fileData, $_ );

  # print all defines of this file
  for ( my $i = 0; $i < @refKeys; $i++ )
  {
    $item = $refKeys [$i];

    $ref = $itemRef->{$item};
    $var = $ref->{ $defName };

    $_ = $space12 . "\'$var\'";

    if ( $i < ( @refKeys - 1 ) )  # not on last enty
    {
      $_ = $_ . ",";
    }

    push ( @fileData, $_ );
  }

  $_ = $space10 . "],";
  push ( @fileData, $_ );

}               #----  createFileDef  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  createJsFiles
#
#  Description :
#
#   This function  creates a java  script file which contains  an object
#   with  all files  names  and an  array  with all  infos  for a  file,
#   e.g. functions, defines, classes, macros and others.
#
#  Example:
#
#   const filesData =
#     {
#       fileNames:
#         [ 'ecb-buffertab.el',
#           'ecb-cycle.el',
#           'ecb-ecb.el'
#         ],
#
#       filesInfo:
#       [
#         {
#           fileName: 'ecb-buffertab.el',
#           functions:
#             [ 'ecb-buffertab-setup-header',
#               'ecb-buffertab-popup-menu',
#               'ecb-buffertab-make-menuname'
#             ],
#           variables:
#             [ 'ecb-buffertab-header',
#               'ecb-buffertab-popup',
#               'ecb-buffertab-menuname'
#             ]
#         },
#
#         ... and many more
#
#       ]
#     }
#
#-------------------------------------------------------------------------

sub createJsFiles
{
  my $fileName;
  my %fileRef;
  my $fileRef;
  my $itemRef;
  my $jsName;
  my $ref;

  $space8  = ' ' x 8;
  $space10 = ' ' x 10;
  $space12 = ' ' x 12;

  $jsName = "FilesData.js";

  push ( @fileData, "const filesData =" );
  push ( @fileData, "  {" );
  push ( @fileData, "    fileNames:" );
  push ( @fileData, "      [" );

  for ( my $idx = 0; $idx < @lispFiles; $idx++ )
  {
    $fileName = $lispFiles [$idx];
    $fileName =~ s/$rootDir\///;

    $_ = $space8 . "\'$fileName\',";
    push ( @fileData, $_ );
  }

  push ( @fileData, "      ],\n" );
  push ( @fileData, "    filesInfo:" );
  push ( @fileData, "    [" );

  for ( my $idx = 0; $idx < @lispFiles; $idx++ )
  {
    $fileName = $lispFiles [$idx];
    $fileRef = $packages {$fileName};

    $fileName =~ s/$rootDir\///;

    push ( @fileData, "      {" );

    $_ = $space8 . "fileName: \'$fileName\',";
    push ( @fileData, $_ );

    createFileDef ( $idx, "functions" );
    createFileDef ( $idx, "macros"    );
    createFileDef ( $idx, "classes"   );
    createFileDef ( $idx, "methods"   );
    createFileDef ( $idx, "variables" );
    createFileDef ( $idx, "constants" );
    createFileDef ( $idx, "customs"   );
    createFileDef ( $idx, "groups"    );
    createFileDef ( $idx, "substs"    );
    createFileDef ( $idx, "structs"   );

    $_ = "      }";

    if ( $idx < ( @lispFiles - 1 ) )  # not on last enty
    {
      $_ = $_ . ",";
    }

    push ( @fileData, $_ );
  }

  push ( @fileData, "    ]" );
  push ( @fileData, "  }" );

  $_ = join ( "\n", @fileData );

  $jsName = $dataDir . "/" . $jsName;

  write_file ( $jsName, $_ );

}               #----  createJsFiles  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  parseDefines
#
#  Description :
#
#   This function  parses the given  definitions of the given  lisp file
#   including parameter list and doc string.
#
#
#-------------------------------------------------------------------------

sub parseDefines
{
  my %var;       # define new hash for this file
  my $varRef;    # hash reference for variables in this file
  my $fileRef;   # hash reference for this file (package)
  my $varName;
  my $fileName;
  my @fields;
  my $begIdx;
  my $endIdx;
  my $par;
  my $ref;
  my $defnames;
  my $defname;
  my $deflisp;
  my $defref;
  my %defref;
  my $withPar;
  my %fileRef;
  my %varRef;
  my %ref;

  $fileName = shift;
  $defname  = shift;
  $deflisp  = shift;
  $defref   = shift;
  $withPar  = shift;

  if ( not defined $withPar )
  {
    $withPar = 0;
  }

  $defnames = $defname . "s";  # for examples groups

  if ( $defname eq "class" )   # special plural for class
  {
    $defnames = "classes";
  }

  $fileRef = $packages {$fileName};
  $fileRef->{ $defnames } = \%var;

  $fileName =~ s/$rootDir\///;    # store filename relative to root

  $varRef = \%var;

  $endIdx = 0;

  for ( my $i = 0; $i < @file; $i++ )
  {
    $ref = getItemBody ( $deflisp, $endIdx );

    $begIdx = $ref->{ 'bodybeg' };

    if ( $begIdx < 0 )
    {
      last;
    }

    $endIdx = searchForward ( "\\)", $begIdx );

    $_ = joinWithNl ( $begIdx, $endIdx );
    s/\($deflisp\s*//;     # delete item name

    if ( $withPar == 1 )
    {
      s/\(//g;     # remove opening parenthesis
      s/\)//g;     # remove closing parenthesis
    }

    @fields = split ();    # split with whitespace

    $_ = trimmed ( shift @fields );
    s/\(//;       # delete opening paren, e.g. for structs

    $varName = $_;

    $ref->{ 'filename' } = $fileName;
    $ref->{ $defname }   = $varName;

    if ( $withPar == 1 )
    {
      $par = join ( " ", @fields );
      $ref->{ 'parameter' } = $par;
    }

    my %varName;

    $defref->{$varName}  = $ref;
    $varRef-> {$varName} = $ref;

    $endIdx = $ref->{ 'bodyend' };
  }

}               #----  parseDefines  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  parseModules
#
#  Description :
#
#   This function parses the lisp definitions in all module files.
#
#-------------------------------------------------------------------------

sub parseModules
{
  my $fileName;

  %packages   = ();

  %classes    = ();    # data structure for all class declarations
  %macros     = ();    # data structure for all macro declarations
  %methods    = ();    # data structure for all methods declarations
  %variables  = ();    # data structure for all variable declarations
  %functions  = ();    # data structure for all functions
  %modules    = ();    # data structure for all classes
  %substs     = ();    # data structure for all substs
  %structs    = ();    # data structure for all structs
  %consts     = ();    # data structure for all const definitions
  %customs    = ();    # data structure for all custom definitions (macro)
  %groups     = ();    # data structure for all customization groups

  for ( my $idx = 0; $idx < @lispFiles; $idx++ )
  {
    $fileName = $lispFiles [$idx];

    print "Parsing file $fileName ...\n";

    @file = read_file ($fileName);

    chomp (@file);

    setFile (@file);

    my %fun;    # define new hash for this file

    $packages {$fileName} = \%fun;

    parseDefines ( $fileName, "function", "defun",        \%functions, 1 );
    parseDefines ( $fileName, "macro",    "defmacro",     \%macros,    1 );
    parseDefines ( $fileName, "class",    "defclass",     \%classes,   1 );
    parseDefines ( $fileName, "method",   "cl-defmethod", \%methods,   1 );
    parseDefines ( $fileName, "variable", "defvar",       \%variables, 0 );
    parseDefines ( $fileName, "constant", "defconst",     \%consts,    0 );
    parseDefines ( $fileName, "custom",   "defcustom",    \%customs,   0 );
    parseDefines ( $fileName, "group",    "defgroup",     \%groups,    0 );
    parseDefines ( $fileName, "subst",    "defsubst",     \%substs,    0 );
    parseDefines ( $fileName, "struct",   "cl-defstruct", \%structs,   0 );
  }

}               #----  parseModules  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  findBodyEnd
#
#  Description :
#
#   This  function searches  for the  end  of a  lisp body  item. It  is
#   recognized when it finds a  closing parenthesis followed by an empty
#   line and then followed by a opening parenthesis at line start.
#
#  Input parameters :
#   start line number
#
#  Output parameter :
#   end line index
#
#-------------------------------------------------------------------------

sub findBodyEnd
{
  my $begLine;
  my $endLine;
  my $state;
  my $len;
  my $line;
  my $comments;

  $begLine = shift;
  $endLine = -1;

  $state = 0;
  $len   = @file;

  $comments = 0;

  for ( my $i = $begLine; $i < $len; $i++ )
  {
    $_ = $file [$i];

    if ( $_ =~ /^\s*;+/ )    # skip comments
    {
      $comments++;
      next;             # multiple empty lines
    }

    if ( $state == 0 )
    {
      if ( $_ =~ /\)\s*$/ ) # closing parenthesis at the line end
      {
        $state = 1;
      }

      next;
    }

    if ( $state == 1 )
    {
      if ( $_ =~ /^\s*$/ ) # matches empty line, must be there
      {
        $state = 2;

        next;
      }

      # stay in state if line ends with closing parenthesis

      if ( $_ !~ /\)\s*$/ ) # no closing parenthesis at the line end
      {
        $state = 0;       # restart
      }

      next;
    }

    if ( $state == 2 )
    {
      if ( $_ =~ /^\s*$/ ) # matches empty line
      {
        next;             # multiple empty lines
      }

      if ( $_ =~ /^\(/ )
      {
        $endLine = $i - 2 - $comments;
        last;
      }
      else
      {
        $state = 0;       # restart
      }
    }
  }

  if ( $endLine < 0 )
  {
    $endLine = $len - 1;
  }

  return $endLine;

}               #----  findBodyEnd  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  getItemBody
#
#  Description :
#
#   This function  searches for a lisp  item like defun, defvar  etc. in
#   the current file which starts at the beginning of a line.  It stores
#   the  start and  end line  of the  definition, the  body and  the doc
#   string and returns it in a hash.
#
#  Input parameters :
#   array :
#     0 : item name
#     1 : start line number
#
#  Output parameter :
#   hash :
#     itembeg : item start line number
#     itemend : item end line number
#     bodybeg : body start line number
#     bodyend : body end line number
#     docbeg  : doc start line number
#     docend  : doc end line number
#     body    : body content
#     doc     : doc content
#     param   : parameter (optional)
#
#-------------------------------------------------------------------------

sub getItemBody
{
  my %item;
  my $begLine;
  my $endLine;
  my $text;
  my $find;
  my $name;
  my $idx;

  $name = shift;
  $idx  = shift;

  $find = "^\\(" . $name;

  $begLine = -1;
  $endLine = -1;

  $begLine = searchForward ( $find, $idx );

  %item = ();

  if ( $begLine < 0 )    # nothing found
  {
    $item { 'bodybeg' } = -1;

    return \%item;
  }

  $item { 'definition' } = $file [ $begLine ];

  $endLine = findBodyEnd ($begLine);

  $item { 'itembeg' } = $begLine;
  $item { 'bodybeg' } = $begLine;
  $item { 'bodyend' } = $endLine;

  $text = joinWithNl ( $begLine, $endLine );
  $item { 'body' }    = $text;

  # search for doc string beginning
  $find = '^\s*"';

  $begLine = searchForward ( $find, $begLine );

  # no doc string found ?
  if ( ( $begLine < 0 ) or ( $begLine >= $endLine ) )
  {
    return \%item;
  }

  $item { 'docbeg' } = $begLine;

  # search for doc string end
  $find = '"$';

  # search for closing double apostrophe
  $endLine = searchForward ( $find, $begLine );

  $idx = 0;

  # check for escaped double quotes
  while ( $idx == 0 )
  {
    $_ = $file [$endLine];

    if ( $_ =~ /\\"$/ )  # escaped double quotes ?
    {
      $endLine = searchForward ( $find, $endLine + 1 );
    }
    else
    {
      $idx = 1;
    }
  }

  $item { 'docend' } = $endLine;

  $_ = joinWithNl ( $begLine, $endLine );

#  s/\n"//g;
#  s/"//g;
  s/\\//g;
  s/'/"/g;    # apostrophe
#  s/\s+/ /g;

  $item { 'doc' } = $_;

  $text = getLispCode ( \%item );

  $item { 'body' } = $text;    # update cleaned body

  # add definition or prototype e.g. of a function

  $begLine = $item { 'itembeg' };
  $endLine = $item { 'docbeg' } - 1;

  $_ = joinWithNl ( $begLine, $endLine );
  s/\n//g;
  s/'/"/g;    # apostrophe
  s/`/"/g;    # backtick

  $item { 'prototype' } = $_;

  return \%item;

}               #----  getItemBody  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  getLispCode
#
#  Description :
#
#   This function removes  the docstring from the lisp  body and returns
#   it.  The docstring should be  removed to avoid double information in
#   the  html file  and  to  simplify the  parsing  for references  when
#   searching in lisp body code.
#
#  Input parameters :
#   reference to the item
#
#  Output parameter :
#   lisp code joined in a text string
#
#-------------------------------------------------------------------------

sub getLispCode
{
  my @tmp;
  my @rest;
  my @body;
  my $bodybeg;
  my $bodyend;
  my $docbeg;
  my $docend;
  my $ref;

  $ref = shift;

  $bodybeg = $ref->{ 'bodybeg' };
  $bodyend = $ref->{ 'bodyend' };

  $docbeg  = $ref->{ 'docbeg' };
  $docend  = $ref->{ 'docend' };

  @tmp  = @file [ $bodybeg ... $docbeg - 1 ];
  @rest = @file [ $docend + 1 ... $bodyend ];

  @body = ( @tmp, @rest );

  $_ = join ( "\n", @body );

  return $_;

}               #----  getLispCode  ----#

#-------------------------------------------------------------------------
#
#  Function Name   :  readDir
#
#  Description :
#
#   This function reads the root directory recursive and stores the name
#   of all lisp files in the array '@lispFiles'.
#
#-------------------------------------------------------------------------

sub readDir
{
  my @parts;
  my $fname;
  my $ext;

  if (-f $_)
  {
    $fname = $_;

    @parts = fileparse ( $fname, qr{\..*} );

    $ext = $parts [2];

    $_ = $File::Find::name;

    if ( $ext eq ".el" )
    {
      push ( @lispFiles, $_ );
    }
  }

}
