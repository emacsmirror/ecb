#-------------------------------------------------------------------------
#
#  Package name :  TextUtils.pm
#
#  Description  :
#
#   This  package provides   some  utility functions  for  the  usage in
#   the code formatting modules.
#
#
#  Developer : Oskar Leirich                Creation date : 15.Mar.2009
#  Modified  : Oskar Leirich                Last changes  : 05.Sep.2025
#
#  Functions in this module :
#    TextUtils                 cleanPath                 deleteLine
#    getBlock                  insertLine                joinLines
#    joinWithNl                normLine                  searchBackward
#    searchForward             setFile                   skipEmptyLines
#    trimmed
#
#-------------------------------------------------------------------------*/

package TextUtils;

require Exporter;

our @ISA = qw(Exporter);
our @EXPORT  = qw ( @file joinLines searchBackward searchForward
                    insertLine deleteLine skipEmptyLines trimmed
                    cleanPath getBlock setFile joinWithNl );
our @VERSION = 1.00;

use warnings;
use strict;

our @file;         # contains current file for analysing

#-------------------------------------------------------------------------
#
#  Function Section
#
#-------------------------------------------------------------------------


#-------------------------------------------------------------------------
#
#  Function Name   :  cleanPath
#
#  Description :
#
#   This function normalizes  the path separator of the  given string to
#   have only a slash a separator not any backslash.
#
#-------------------------------------------------------------------------

sub cleanPath
{

  $_ = shift;

  s/\\+/\//g;

  return $_;

}               #----  cleanPath  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  getBlock
#
#  Description :
#
#   This function copies a portion  from the file between two delimiters
#   and returns it.  The delimiters are regular expressions.
#
#  Input parameters :
#     start line number
#     delimiter 1
#     delimiter 2
#
#  Output parameter :
#     text block
#
#-------------------------------------------------------------------------

sub getBlock
{
  my $delim_1;
  my $delim_2;
  my $idx1;
  my $idx2;
  my $text;

  $idx1    = shift;
  $delim_1 = shift;
  $delim_2 = shift;

  $idx1 = searchForward ( $delim_1, $idx1 );

  if ( $idx1 < 0 )    # nothing found
  {
    return $text;
  }

  $idx2 = searchForward ( $delim_2, $idx1 );

  if ( $idx2 < 0 )    # nothing found
  {
    return $text;
  }

  $text = joinLines ( $idx1, $idx2 );

  $idx1 = index ( $text, $delim_1 );
  $text = substr ( $text, $idx1 + 1 );

  $idx2 = index ( $text, $delim_2 );
  $text = substr ( $text, 0, $idx2 );

  return $text;

}               #----  getBlock  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  deleteLine
#
#  Description :
#
#   This function deletes the line with the given index.
#
#-------------------------------------------------------------------------

sub deleteLine
{
  my $len;
  my $line;
  my @tmp;
  my @rest;

  $line = shift;

  $len = $#file;

  @tmp  = @file [ 0 ... $line - 1 ];
  @rest = @file [ $line + 1 ... $len ];

  @file = ( @tmp, @rest );

}               #----  deleteLine  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  insertLine
#
#  Description :
#
#   This function inserts an empty line at the given index.
#
#-------------------------------------------------------------------------

sub insertLine
{
  my $len;
  my $line;
  my @tmp;
  my @rest;

  $line = shift;

  $len = $#file;

  @tmp  = @file [ 0 ... $line ];
  @rest = @file [ $line ... $len ];

  @file = ( @tmp, @rest );

  $file [$line] = "";

}               #----  insertLine  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  joinLines
#
#  Description :
#
#   This helper  function joins  all lines between  'beg' and  'end' and
#   returns it as a single line.
#
#-------------------------------------------------------------------------

sub joinLines
{
  my $beg;
  my $end;

  $beg = shift;
  $end = shift;

  $_ = "";

  for ( my $i = $beg; $i <= $end; $i++ )
  {
    $_ = $_ . $file [$i];
  }

  return $_;

}               #----  joinLines  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  joinWithNl
#
#  Description :
#
#   This helper  function joins all  lines between 'beg' and  'end' with
#   new lines returns it as a single line.
#
#-------------------------------------------------------------------------

sub joinWithNl
{
  my @body;
  my $beg;
  my $end;

  $beg = shift;
  $end = shift;

  @body  = @file [ $beg ... $end ];

  $_ = join ( "\n", @body );

  return $_;

}               #----  joinWithNl  ----#

#-------------------------------------------------------------------------
#
#  Function Name   :  normLine
#
#  Description :
#
#   This helper  normalizes the  given line, this  means it  reduces all
#   spaces to only one space.
#
#-------------------------------------------------------------------------

sub normLine
{

  $_ = shift;

  s/\s+/ /g;

  return $_;

}               #----  normLine  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  searchBackward
#
#  Description :
#
#   This function  searches backward until the  given regular expression
#   is found.  The line number of the match is given back.
#
#-------------------------------------------------------------------------

sub searchBackward
{
  my $len;
  my $regEx;
  my $i;

  $regEx = shift;    # regular expression
  $i     = shift;    # line number

  while ( $i > 0 )
  {
    $_ = $file [$i];

    $_ = '' unless $_;

    if ( $_ =~ /$regEx/ )
    {
      return $i;
    }

    $i--;

  }

  return -1;

}               #----  searchBackward  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  searchForward
#
#  Description :
#
#   This function searches forward until the given regular expression is
#   found.  The line number of the match is given back.
#
#-------------------------------------------------------------------------

sub searchForward
{
  my $len;
  my $regEx;
  my $beg;
  my $i;

  $regEx = shift;    # regular expression
  $i     = shift;    # line number

  $len = @file;

  while ( $i < $len )
  {
    $_ = $file [$i];

    $_ = '' unless $_;

    if ( $_ =~ /$regEx/ )
    {
      return $i;
    }
    $i++;
  }

  return -1;

}               #----  searchForward  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  setFile
#
#  Description :
#
#   This function takes the given list and stores it in the own @files.
#
#-------------------------------------------------------------------------

sub setFile
{

  @file = @_;

}               #----  setFile  ----#


#-------------------------------------------------------------------------
#
#  Function Name   :  skipEmptyLines
#
#  Description :
#
#   This function  searches forward  as long as  empty lines  are found.
#   The line number of the first  line which is not empty is given back,
#   or -1 if the end of the file buffer is reached.
#
#-------------------------------------------------------------------------

sub skipEmptyLines
{
  my $len;
  my $curLine;
  my $i;

  $curLine = shift;

  $len = $#file;

  while ( $curLine <= $len )
  {
    $_ = $file [$curLine];

    if ( $_ =~ /^$/ ) # skip empty lines
    {
      $curLine++;
    }
    else
    {
      last;
    }
  }

  if ( $curLine >= $len )
  {
    $curLine = -1;
  }

  return $curLine;

}               #----  skipEmptyLines  ----#


#-------------------------------------------------------------------------
#
#  Function name : trimmed
#
#  Description :
#
#   This function deletes whitespaces at the beginning and at the end of
#   the given string.
#
#-------------------------------------------------------------------------*/

sub trimmed
{

  $_ = shift;

  if ( $_ =~ /^\s+/ )
  {
    s/^\s+//;     # delete whitespace at the beginning
  }

  if ( $_ =~ /\s+$/ )
  {
    s/\s+$//;     # delete whitespace at the end
  }

  return $_;

}               #-----  trimmed  -----#

1;
