/*****************************************************************************
**
**  vFRAME -- VIRTUAL HTML FRAMES MACHINERY
**  2018-2024 (c) Vladi Belperchinov-Shabanski "Cade"
**  <cade@bis.bg> <cade@cpan.org> <shabanski@gmail.com>
**
**  LICENSE: GPLv2
**
******************************************************************************
**
**  usage: html text <div class=vframe>virtual html frame</div> more html
**
**  note:  include <script src="vframe.js"></script> somewhere in the html
**
**  for more, visit: https://github.com/cade-vs/js-vframe
**
*****************************************************************************/

vframe_init();

function vframe_init()
{
  document.onclick = on_document_click;
}

function on_document_click( event ) 
{ 
  var target = event.target;

  if( target.tagName == 'IMG'   ) // assumed IMG inside A
    return on_click_img( event, target );

  if( target.tagName == 'A' ) 
    return on_click_anchor( event, target );

  if( ( target.tagName == 'INPUT' && target.type == "submit" ) || target.tagName == 'BUTTON' )
    return on_click_submit( event, target );

}

function on_click_img( event, target )
{
  var parent_target = target.closest( "A" );
  if( parent_target )
    return on_click_anchor( event, parent_target );
  else
    return false;  
}

function on_click_anchor( event, target )
{  
  var vframe;

  if( target.target != '' )
    return;

  var vfr_target_id = target.dataset.vframeTarget;
  if( vfr_target_id )
    vframe = document.getElementById( vfr_target_id );

  if( ! vframe )
    vframe = target.closest( ".vframe" );
    
  if( ! vframe )
    return;

  var href = target.href;
  http_get( href, function( xhr ) { http_request_handler( xhr, target, vframe ); } );

  event.stopPropagation(); 
  return false; 
}

function on_click_submit( event, target )
{
  var vframe = target.closest( ".vframe" );
  if( ! vframe )
    {
    return;
    }

  var form = target.form;
  var data = new FormData( form );
  http_request( form.method, form.action, data, function( xhr ) { http_request_handler( xhr, target, vframe ); } );

  if( event ) 
    event.stopPropagation(); 
  return false; 
}

function http_get( url, callback )
{
  http_request( "GET", url, null, callback );
}

function http_request( method, url, data, callback )
{
    var cs  = document.characterSet;
    var xhr = new XMLHttpRequest();
    xhr.onload = function() { callback( xhr ); };
    xhr.open( method, url );
    xhr.send( data );
}

function http_request_handler( xhr, target, vframe )
{
  if( xhr.status == 200 )
    vframe.innerHTML = xhr.responseText;
  else
    alert( "Error requesting resource! Please, try again later or contact server administrator..." );
}

/*** eof ********************************************************************/
