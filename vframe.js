// 2018 (c) cade@bis.bg

vframe_init();




function vframe_init()
{
  document.onclick = on_document_click;
}

function on_document_click( event ) 
{ 
  var target = event.target;
  
  if( target.tagName == 'A'     ) 
    return on_click_anchor( event, target );
  
  if( target.tagName == 'INPUT' && target.type == "submit" )
    return on_click_submit( event, target );

}

function on_click_anchor( event, target )
{  
  var vframe = target.closest( ".vframe" );
  if( ! vframe )
    {
    //alert( "NOT FOUND" );
    return;
    }

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
    //alert( "NOT FOUND" );
    return;
    }

  var form = target.form;
  var data = new FormData( form );
  http_request( form.method, form.action, data, function( xhr ) { http_request_handler( xhr, target, vframe ); } );

  event.stopPropagation(); 
  return false; 
}

function http_get( url, callback )
{
  http_request( "GET", url, null, callback );
}

function http_request( method, url, data, callback )
{
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
    alert( "Error requesting resource! Please, try again later..." );
}
