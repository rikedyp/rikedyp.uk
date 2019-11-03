// render.js

// TODO
// Redraw / rescale on device rotation (mobile)

var scale = 12;
var wallQ = [];
var walls = [];
//var posQ = [];
var pos = [];
var wallSPS;
var wallPlanes = [];
var SPS;
var groups = [1280,1];
var radii = [.1,.1875];

var canvas;
var playFrame = 0;
var frameTime = 17;
var pbmult = 1;
var timer;
var playing = 0;
var slider;
var playButton;
var restarting = 0;

window.onload = function() {
  canvas = document.getElementById("viewport");  
  load();
  loadScene();
}

async function loadScene() {  
  wakeBaby();
}

async function wakeBaby() {
  await load;
  baby = new BABYLON.Engine(canvas, true);
  var scene = createScene(baby);
  baby.runRenderLoop(function(){
    scene.render();
  });
  window.addEventListener("resize", function() {
    baby.resize();
  });
}

async function load() {
  posQ = JSON.parse(posQ);
}

function startStop() {
  if (playing) {
    playButton.children[0].text = "▶";
    clearTimeout(timer)
    playing = 0;
    if (playFrame < posQ.length) {
      restarting = 0;
    }
  } else {
    if (restarting) {
      playFrame = 0;
    }      
    playButton.children[0].text = "⏸";
    nextFrame();
    playing = 1;
  }
}

function end() {
  startStop();
  playButton.children[0].text = "↻";
  restarting = 1;
}

function fullScreen() {
  baby.switchFullscreen(false);
}

function nextFrame() {
  if (playing) {
    playFrame += pbmult;
    slider.value = playFrame;      
  }
  timer = setTimeout("nextFrame()", frameTime);
}

function stepScene() {
  if (playFrame > posQ.length - 1) {end();console.log("movie end");return false;}
  console.log("step " + String(playFrame));
  // Get latest positions, update step counter
  pos = posQ[playFrame];  
  // Update particle positions in Babylon SolidParticleSystem
  SPS.updateParticle = updateParticle;
  SPS.setParticles();
  // Update wall positions in scene 
  // if (wallQ[0].length > 1) {
    // wallmove = wallQ[playFrame];
    // wallSPS.updateParticle = updateWalls;
    // wallSPS.setParticles();
  // }
}

var updateParticle = function(particle){
  var pid = particle.idx
  particle.position.x = pos[pid][0]*scale;
  particle.position.y = pos[pid][1]*scale;
  particle.position.z = pos[pid][2]*scale;
}

var createScene = function(engine) {
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
  var camera = new BABYLON.ArcRotateCamera("Camera", 30, 1, 50, new BABYLON.Vector3(7, 10, 4), scene);
  camera.attachControl(canvas);
  // GUI
  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("myUI");
  var panel = new BABYLON.GUI.StackPanel();
  panel.height = "8%";
  panel.top = "43%";
  panel.isVertical = 0;
  advancedTexture.addControl(panel);
  var buttonSize = String(Math.round(0.1 * canvas.height)) + "px";
  playButton = BABYLON.GUI.Button.CreateSimpleButton("play", "▶");
  playButton.width = buttonSize;
  playButton.height = buttonSize;
  playButton.fontSize = 30;
  playButton.color = "white";
  playButton.thickness = 0;
  playButton.isPointerBlocker = true;
  playButton.onPointerClickObservable.add(startStop); 
  slider = new BABYLON.GUI.Slider();
  slider.minimum = 0;
  slider.color = "white";
  slider.background = "black";
  slider.maximum = 400;
  slider.value = 0;
  slider.height = "15px";
  slider.step = 1;
  slider.isThumbCircle = 1;
  slider.width = String(0.8 * canvas.width) +  "px";
  slider.onValueChangedObservable.add(function(value) {
    playFrame = value;
    stepScene();
    if (!playing && playFrame < posQ.length) {
      restarting = 0;         
      playButton.children[0].text = "▶";
    }
  });
  var FSButton = new BABYLON.GUI.Button.CreateSimpleButton("FS", "⛶");
  FSButton.height = buttonSize;
  FSButton.width = buttonSize;
  FSButton.color = "white";
  FSButton.thickness = 0;
  FSButton.fontSize = 30;
  FSButton.HORIZONTAL_ALIGNMENT_RIGHT;
  FSButton.onPointerClickObservable.add(fullScreen);   
  
  panel.addControl(playButton);
  panel.addControl(slider);
  panel.addControl(FSButton);
  
  var light = new BABYLON.HemisphericLight("Light", new BABYLON.Vector3(0, 1, 0), scene);
  var ground = BABYLON.Mesh.CreateGround('ground1', scale*10, scale*10, 20, scene);
  ground.position = new BABYLON.Vector3((scale/2),0,(scale/2));
  var groundmesh = new BABYLON.StandardMaterial("groundmesh", scene);
  groundmesh.wireframe = true;
  ground.material = groundmesh;
  // Create APLPhys walls 
  // var wallPos = [];
  // wallSPS = new BABYLON.SolidParticleSystem("babywalls", scene);
  // var wallPlanes = [];
  // var walls = wallQ[0];
  // for (var i=0; i<walls.length; i++){
    // var sourcePlane = new BABYLON.Plane(walls[i][0], walls[i][1], walls[i][2], walls[i][3]*scale);
    // sourcePlane.normalize();
    // wallPlanes.push(sourcePlane);
    // var wall = BABYLON.MeshBuilder.CreatePlane("plane", {height:10, width: 10, sourcePlane: sourcePlane, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
    // wallSPS.addShape(wall, 1);
    // wallPos.push(wall.position);
    // wall.dispose();
  // }
  // var wallmesh = wallSPS.buildMesh();
  // wallmesh.hasVertexAlpha = true;
  // var pi = 1.57;
  // var numwalls = wallSPS.particles.length;
  // wallSPS.updateParticle = function(wall){
    // wid = wall.idx;
    // var col = (1+wid)/numwalls;
    // console.log(wallPlanes[wid].normal);
    // wall.rotation.x = wallPlanes[wid].normal.y*pi;
    // wall.rotation.y = wallPlanes[wid].normal.x*pi;
    // wall.rotation.z = wallPlanes[wid].normal.z*pi;
    // wall.position = wallPos[wid];
    // wall.color.r = col*0.2;
    // wall.color.g = 0.8*col;
    // wall.color.b = 0.5*1-col;
    // wall.color.a = 0.4;
  // }
  // wallSPS.setParticles();
  
  pos = posQ[0];
  // Set up SPS
  SPS = new BABYLON.SolidParticleSystem("SPS", scene);
  for (var i=0; i<groups.length; i++){
    var sphere = BABYLON.MeshBuilder.CreateSphere("s", {diameter: radii[i]*scale, segments: 10}, scene);
    SPS.addShape(sphere, groups[i]);
    sphere.dispose();
  }
  var mesh = SPS.buildMesh();  // Build and display the mesh
  
  return scene;
}


