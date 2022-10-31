var h = document.getElementById("page").scrollHeight;

var pad = 48;
const mql = window.matchMedia('(max-width: 1200px)');

function mediaPad(e) {
  if (e.matches) {
    pad = 78;
  } else {

  }
}

mql.addEventListener('change', mediaPad);


var full = h + pad;

let num = full;
let fulltext = num.toString();

var px = "px"

var fullpx = fulltext + px

document.getElementById("html").style.height = fullpx;

setTimeout(function()
{
  if( window.localStorage )
  {
    if(!localStorage.getItem('firstLoad'))
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
}, 1000)();