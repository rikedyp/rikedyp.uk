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

// Background colour parameters
var tTime = 3; 
var tDelay = 3000;

// Image slideshow parameters
var slideIndex = 1;

// Wait for page to load. Set up & trigger BG colour transitions. Show first image slide.
window.onload = function() {  
  // document.body.style.transition = "background " + tTime + "s";
  var intervalID = window.setInterval(bgFade, tDelay);
  startStop();
}

rndCol = function(list) {
  var n = Math.floor(Math.random() * bgcolors.length);
  return list[n];
}

function bgFade(){
  var col = rndCol(bgcolors);
  document.body.style.background = col;  
}
