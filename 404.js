var h = document.getElementById("page").scrollHeight;

var pad = 48;
const mql = window.matchMedia('(max-width: 1200px)');

function screenTest(e) {
  if (e.matches) {
    pad = 78;
  } else {

  }
}

mql.addEventListener('change', screenTest);


var full = h + pad;

let num = full;
let fulltext = num.toString();

var px = "px"

var fullpx = fulltext + px

document.getElementById("html").style.height = fullpx;
