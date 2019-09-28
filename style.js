var bgcolors = [
  "#0b896c",
  "#9e5a6c",
  "#4f3129",
  "#333745",
  "#225913",
  "#328889",
  "#db7f90",
  "#5e5852",
  "#586d30",
  "#584164",
  "#285948",
  "#89023e",
  "#3a3a39",
  "#045577",
  "#000000"
]

var coldelay = 3500;

window.onload = function() {
  document.body.style.transition = "background 1s";
  var intervalID = window.setInterval(bgFade, coldelay);
}

function bgFade(){
  var col = Math.floor(Math.random() * bgcolors.length);
  document.body.style.background = bgcolors[col];
}