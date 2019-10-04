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
  document.body.style.transition = "background " + tTime + "s";
  var intervalID = window.setInterval(bgFade, tDelay);
  imgSlide(1);
}

function bgFade(){
  var col = Math.floor(Math.random() * bgcolors.length);
  document.body.style.background = bgcolors[col];  
}

// Image slideshow
function imgSlide(dir) {
  var i;
  var x = document.getElementsByClassName("slide");
  slideIndex = (slideIndex + dir) % x.length;
  var slidePrev = slideIndex - 1;
  var slideNext = slideIndex + 1;
  if (slidePrev < 0) {slidePrev = x.length - 1;}
  if (slideNext > x.length - 1) {slideNext = 0;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    x[i].style.left = "200vw"; 
  }
  x[slideIndex].style.left = "0vw";
  x[slideIndex].style.display = "inline";
  x[slidePrev].style.display = "inline";
  x[slideNext].style.display = "inline";
  x[slidePrev].style.left = "150vw";
  x[slideNext].style.left = "-150vw";
  // x[slideIndex-1].style.display = "inline";  
}

