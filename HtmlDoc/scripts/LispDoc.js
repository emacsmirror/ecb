/*-------------------------------------------------------------------------
 |
 |  File Name   :  LispDoc.js
 |
 |  Description :
 |
 |   This  module  is  the  main   javascript  file  for  the  lisp  code
 |   documentation.
 |
 |
 |  Developer : Oskar Leirich                Creation date : 17.Aug.2025
 |  Modified  : Oskar Leirich                Last changes  : 02.Sep.2025
 |
 |
 |  This unit contains following member functions :
 |   of LispDoc:
 |    fillDefines               fillFiles                 initLispDoc
 |    initNaviEvent             onFileClicked             onNaviClicked
 |
 +-------------------------------------------------------------------------*/

"use strict";

/*--------------------------------------------*/
/*   G L O B A L -  D e c l a r a t i o n s   */
/*--------------------------------------------*/

let filesInfo;
let fileList;
let curFile;
let curNavi;
let curDef;       // object of selected navi item, like function, macro
let curItem;
let idxNavi;
let idxFile;
let idxItem;
let defsList;     // names of the selected defines
let naviList;
let naviData;     // array for all data
let showCode;

// colors for selected items, navigation bar, side menu
let colFile;
let bgFile;

let colNavi;
let bgNavi;

let colSelect;
let bgSelect;

document.addEventListener ( "DOMContentLoaded", initLispDoc () );


/*-------------------------------------------------------------------------
 |
 |  Member function : fillDefines  of  LispDoc
 |
 |  Description :
 |
 |   This function  fills the defines menu  on the left with  the defines
 |   from the selected navi and file menu.
 |
 +-------------------------------------------------------------------------*/

function fillDefines ()
{
  let cssObj;
  let text;
  let item;
  let defs;
  let listItem;
  let textItem;

  defsList = [];
  curDef   = {};

  defs = document.getElementById ( 'id-def-list' );

  // first remove all event listener of the define items
  listItem = defs.children;

  for ( let i = 0; i < defs.children.length; i++ )
  {
    listItem =  defs.children [i];
    listItem.removeEventListener ( "click", onDefineClicked );
  }

  removeChilds (defs);

  text = curNavi.toLowerCase ();

  idxItem = -1;

  if ( ! curFile.hasOwnProperty (text) )
    return;

  switch (idxNavi)
  {
    case 0:
      defsList = curFile.functions;
      curDef   = functions;
    break;

    case 1:
      defsList = curFile.macros;
      curDef   = macros;
    break;

    case 2:
      defsList = curFile.classes;
      curDef   = classes;
    break;

    case 3:
      defsList = curFile.methods;
      curDef   = methods;
    break;

    case 4:
      defsList = curFile.variables;
      curDef   = variables;
    break;

    case 5:
      defsList = curFile.constants;
      curDef   = constants;
    break;

    case 6:
      defsList = curFile.groups;
      curDef   = groups;
    break;

    case 7:
      defsList = curFile.substs;
      curDef   = substs;
    break;

    case 8:
      defsList = curFile.structs;
      curDef   = structs;
    break;
  }

  for ( let i = 0; i < defsList.length; i++ )
  {
    listItem = document.createElement ( 'li' );

    text = defsList [i];

    textItem = document.createTextNode (text);
    listItem.appendChild (textItem);

    listItem.addEventListener ( "click", onDefineClicked );

    defs.appendChild (listItem);
  }

  clearDetails ();

}                   /*-----  fillDefines  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : clearDetails  of  LispDoc
 |
 |  Description :
 |
 |   This function  clears every entry  in the main container  by setting
 |   the text  to a single  space. It is  called from fillDefines  if the
 |   navi or file selection has changed.
 |
 +-------------------------------------------------------------------------*/

function clearDetails ()
{
  let text;
  let item;

  // define name
  text = " ";

  item = document.getElementById ( 'id-def' );
  item.innerText = text;

  // prototype
  item = document.getElementById ( 'id-proto' );
  item.innerText = text;

  // docstring
  item = document.getElementById ( 'id-doc' );
  item.innerText = text;

  // parameter
  item = document.getElementById ( 'id-par' );
  item.innerText = text;

  // lisp code
  item = document.getElementById ( 'id-code' );
  item.innerText = text;

}                   /*-----  clearDetails  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : fillDetails  of  LispDoc
 |
 |  Description :
 |
 |   This  function fills  the main  container  with the  details of  the
 |   selected define (name of function, macro ...) from the selected navi
 |   (function, macro ...) and file menu.
 |
 +-------------------------------------------------------------------------*/

function fillDetails ()
{
  let text;
  let item;

  // define name
  text = defsList [idxItem];

  item = document.getElementById ( 'id-def' );

  item.innerText = text;

  // prototype
  item = document.getElementById ( 'id-proto' );

  if ( curItem.hasOwnProperty ( "prototype" ) )
    text = curItem.prototype;
  else
    text = "Not defined";

  item.innerText = text;

  // docstring
  item = document.getElementById ( 'id-doc' );

  if ( curItem.hasOwnProperty ( "docstring" ) )
    text = curItem.docstring;
  else
    text = "Not available";

  item.innerHTML = text;   // html, because it contains <br>

  // parameter
  item = document.getElementById ( 'id-par' );

  if ( curItem.hasOwnProperty ( "parameter" ) )
    text = curItem.parameter;
  else
    text = "Not available";

  item.innerText = text;

  // lisp code
  item = document.getElementById ( 'id-code' );

  text = curItem.lispcode;    // is always there

  // global replace back to get original lisp code
  text = text.replace ( /<br>/g,       "\n" );
  text = text.replace ( /<apo>/g,      '"' );
  text = text.replace ( /<tick>/g,     "'" );
  text = text.replace ( /<backtick>/g, "`" );

  item.innerHTML = text;

  HighlightLisp.highlight_element (item);
  HighlightLisp.paren_match ();

}                   /*-----  fillDetails  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : fillFiles  of  LispDoc
 |
 |  Description :
 |
 |   This function  fills the navigation menu  on the left with  all file
 |   names.
 |
 +-------------------------------------------------------------------------*/

function fillFiles ()
{
  let cssObj;
  let text;
  let item;
  let files;
  let listItem;
  let textItem;

  files = document.getElementById ( 'id-filenames' );

  removeChilds (files);

  for ( let i = 0; i < fileList.length; i++ )
  {
    listItem = document.createElement ( 'li' );

    text = fileList [i];

    textItem = document.createTextNode (text);
    listItem.appendChild (textItem);

    listItem.onclick = onFileClicked;

    files.appendChild (listItem);
  }

  // select first file by default
  idxFile = 0;

  curFile = filesData.filesInfo [0];

  item = files.firstChild;

  cssObj = getComputedStyle ( item, ".active" );

  colFile = cssObj.getPropertyValue ( "color" );
  bgFile  = cssObj.getPropertyValue ( "background-color" );

  setColors ( item, colSelect, bgSelect );

  console.log ('File names ready !!');

}                   /*-----  fillFiles  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : onDefineClicked  of  LispDoc
 |
 |  Description :
 |
 |   This function  is called when an  item in the file  list is clicked.
 |   It detects what file is selected and calls 'fillDefines' which fills
 |   the define menu with the items.
 |
 +-------------------------------------------------------------------------*/

function onDefineClicked ()
{
  let item;
  let defs;
  let text;
  let idx;

  item = document.getElementById ( 'id-def-list' );

  defs = item.children;   // needed for color changing

  text = this.innerText;

  idx = defsList.indexOf (text);

  if ( idx == idxItem )    // no change
    return;

  // default color of previous file
  if ( idxItem >= 0 )
  {
    item = defs [idxItem];
    setColors ( item, colFile, bgFile );
  }

  idxItem = idx;

  text = defsList [idxItem];

  idx = curDef.names.indexOf (text);

  curItem = curDef.info [idx];

  // selected color of previous file
  item = defs [idxItem];

  setColors ( item, colSelect, bgSelect );

  fillDetails ();

}                   /*-----  onDefineClicked  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : onFileClicked  of  LispDoc
 |
 |  Description :
 |
 |   This function  is called when an  item in the file  list is clicked.
 |   It detects what file is selected and calls 'fillDefines' which fills
 |   the define menu with the items.
 |
 +-------------------------------------------------------------------------*/

function onFileClicked ()
{
  let item;
  let files;
  let text;
  let idx;

  item = document.getElementById ( 'id-filenames' );
  files = item.children;

  text = this.innerText;

  idx = fileList.indexOf (text);

  if ( idx == idxFile )    // no change
    return;

  // default color of previous file
  item = files [idxFile];
  setColors ( item, colFile, bgFile );

  idxFile = idx;

  curFile = filesData.filesInfo [idxFile];

  // selected color of previous file
  item = files [idxFile];

  setColors ( item, colSelect, bgSelect );

  fillDefines ();

}                   /*-----  onFileClicked  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : onNaviClicked  of  LispDoc
 |
 |  Description :
 |
 |   This  function is  called  when an  item in  the  navigation bar  is
 |   clicked.  It detects what define is selected and calls 'fillDefines'
 |   which fills the define menu with the items.
 |
 +-------------------------------------------------------------------------*/

function onNaviClicked ()
{
  let item;
  let defs;
  let text;
  let idx;

  item = document.getElementById ( 'id-navbar-ul' );
  defs = item.children;

  text = this.innerText;

  idx = naviList.indexOf (text);

  if ( idx == idxNavi )    // no change
    return;

  // default color of previous define
  item = defs [idxNavi];

  setColors ( item, colNavi, bgNavi );

  idxNavi = idx;

  curNavi = naviList [idxNavi];

  // selected color of previous define
  item = defs [idxNavi];

  setColors ( item, colSelect, bgSelect );

  fillDefines ();

}                   /*-----  onNaviClicked  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : onShowCode  of  LispDoc
 |
 |  Description :
 |
 |   This function is  called when the check button for  'Show lisp code'
 |   is clicked.  Then is shows or hides  the lisp code. If it is visible
 |   then the lisp highlighter is called.
 |
 +-------------------------------------------------------------------------*/

function onShowCode ()
{
  let item;
  let defs;
  let text;
  let idx;

  showCode = ! showCode;

  item = document.getElementById ( 'id-lisp' );

  if ( ! showCode )    // hide it now
  {
    item.style.display = "none";
  }
  else
  {
    item.style.display = "block";
  }

}                   /*-----  onShowCode  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : initNaviEvent  of  LispDoc
 |
 |  Description :
 |
 |   This function  creates the event handler  for all list items  in the
 |   navigation top bar.
 |
 +-------------------------------------------------------------------------*/

function initNaviEvent ()
{
  let text;
  let navList;
  let item;
  let id;

  navList = document.querySelectorAll (".navbar-top li" );

  for ( let i = 0; i < navList.length; i++ )
  {
    item = navList [i];

    text = item.innerText;

    id = item.getAttribute ( "id" );

    // TODO : change to event Listener and store them to remove it later
    item.onclick = onNaviClicked;
  }

}                   /*-----  initNaviEvent  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : initLispDoc  of  LispDoc
 |
 |  Description :
 |
 |   This  function initializes  global variables,  loads and  stores css
 |   properties and  loads all java  script arrays, objects and  maps for
 |   the parsed lisp code.
 |
 +-------------------------------------------------------------------------*/

function initLispDoc ()
{
  let cssObj;
  let item;

  idxFile = 0;
  idxNavi = 0;
  idxItem = -1;

  showCode = false;

  defsList = [];
  curDef   = {};

  curFile = {};
  curItem = "";

  naviList = [ "Functions", "Macros", "Classes", "Methods", "Variables",
               "Constants", "Groups", "Substs", "Structs" ];

  filesInfo = filesData.filesInfo;
  fileList  = filesData.fileNames;

//  naviData.length = 9;

  naviData = [];

  naviData [0] = functions;
  naviData [1] = macros;
  naviData [2] = classes;
  naviData [3] = methods;
  naviData [4] = variables;
  naviData [5] = constants;
  naviData [6] = groups;
  naviData [7] = substs;
  naviData [8] = structs;

  initNaviEvent ();

  curNavi = naviList [0];

  item = document.querySelector ( ".navbar-top ul li" );

  cssObj = getComputedStyle ( item, ".active" );

  colNavi = cssObj.getPropertyValue ( "color" );
  bgNavi  = cssObj.getPropertyValue ( "background-color" );

  colSelect = "white";
  bgSelect  = "mediumseagreen";

  setColors ( item, colSelect, bgSelect );

  fillFiles   ();
  fillDefines ();

  // details use the same color as files

  item = document.getElementById ( 'id-chk-lisp' );
  item.addEventListener ( "click", onShowCode );

  console.log ('Data loaded');

}                   /*-----  initLispDoc  -----*/
