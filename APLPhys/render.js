var ballcolors = [
  "#ffffff",
  "#ccf9cf",
  "#fbeaca",
  "#fec7c8"
];

var playFrames = [0,0,0,0,0];
var playFrame = 0;
var playing = 0;
var pbmult = 1;
var timer;
var ww = window.innerWidth;
var wh = window.innerHeight;

function startStop(){
  if (!playing){
    nextFrame();        
  }
  else {
    clearTimeout(timer);
  }
  playing = !playing;
}

function nextFrame() {
  for (var i=0;i<playFrames.length;i++) {
    playFrames[i] += pbmult;
  }
  RenderCanvas(0, "vp0", posQ0);   
  RenderCanvas(1, "vp1", posQ1);  
  RenderCanvas(2, "vp2", posQ2);  
  RenderCanvas(3, "vp3", posQ3);  
  RenderCanvas(4, "vp4", posQ4);  
  timer = setTimeout("nextFrame()", 17);
}

function RenderCanvas(pFid, cid, posQ) {
  if (posQ.length === 0) {return;}
  var c = document.getElementById(cid);
  c.width = 0.6*window.innerWidth;
  c.height = 0.4*window.innerWidth;
  var ctx = c.getContext("2d");
  if (playFrames[pFid] > posQ.length - 1) {console.log(posQ.length + " " + cid);ctx.clearRect(0, 0, c.width, c.height);playFrames[pFid]  = 0;}
  var pos = posQ[playFrames[pFid]];  
  // ctx.clearRect(0.05*c.width, 0.05*c.height, 0.9*c.width, 0.9*c.height);
  pos.forEach(function(pos){
    ctx.beginPath();
    ctx.arc(pos[0]*c.width,pos[1]*c.height,5,0,2*Math.PI);      
    ctx.closePath() 
    ctx.fillStyle = "white";
    ctx.fill();})
}