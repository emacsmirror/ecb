/*-------------------------------------------------------------------------
 |
 |  File Name   :  JsUtils.js
 |
 |  Description :
 |
 |   This module contains helper and utility functions for javascript and
 |   css.
 |
 |
 |  Developer : Oskar Leirich                Creation date : 31.Aug.2025
 |  Modified  : Oskar Leirich                Last changes  : 02.Sep.2025
 |
 |
 |  This unit contains following member functions :
 |   of JsUtils:
 |    addClass                  removeChilds              removeClass
 |    setColors
 |
 +-------------------------------------------------------------------------*/

"use strict";


/*-------------------------------------------------------------------------
 |
 |  Member function : addClass  of  JsUtils
 |
 |  Description :
 |
 |   This function adds a 'class' with 'className' to the given item.
 |
 +-------------------------------------------------------------------------*/

function addClass ( item, className )
{

  item.classList.add (className);

}                   /*-----  addClass  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : removeClass  of  JsUtils
 |
 |  Description :
 |
 |   This function  removes the 'class'  with 'className' from  the given
 |   item.
 |
 +-------------------------------------------------------------------------*/

function removeClass ( item, className )
{

  item.classList.remove (className);

}                   /*-----  removeClass  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : removeChilds  of  JsUtils
 |
 |  Description :
 |
 |   This function removes all children of the given DOM node element.
 |
 +-------------------------------------------------------------------------*/

function removeChilds (node)
{

  while ( node.firstChild )
  {
    node.removeChild ( node.lastChild );
  }

}                   /*-----  removeChilds  -----*/


/*-------------------------------------------------------------------------
 |
 |  Member function : setColors  of  JsUtils
 |
 |  Description :
 |
 |   This  function sets  the  font  and background  color  of the  given
 |   element.
 |
 +-------------------------------------------------------------------------*/

function setColors ( item, col, bg )
{

  item.style.color = col;
  item.style.backgroundColor = bg;

}                   /*-----  setColors  -----*/

