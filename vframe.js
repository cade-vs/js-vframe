// 2018 (c) cade@bis.bg

vframe_init();




function vframe_init()
{
  document.onclick = on_document_click;
}

function on_document_click( event ) 
{ 
  var target = event.target;
  
  if( target.tagName != 'A' )
    return;
  
  var vframe = target.closest( ".vframe" );
  if( ! vframe )
    {
    alert( "NOT FOUND" );
    return;
    }

  var href = target.href;
  http_get( href, function( xhr ) { http_get_handler( xhr, target, vframe ); } );
  
  
  event.stopPropagation(); 
  return false; 
}

function http_get( url, callback )
{
    var xhr = new XMLHttpRequest();
    xhr.onload = function() { callback( xhr ); };
    xhr.open( "GET", url );
    xhr.send( null );
}

function http_get_handler( xhr, target, vframe )
{
  if( xhr.status == 200 )
    vframe.innerHTML = xhr.responseText;
  else
    alert( "Error requesting resource! Please, try again later..." );
}
