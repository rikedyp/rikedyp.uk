var wallQ = [];
var groups = [];
var posQ = [];
var pos;
var walls = [];
var playing = 0;
var playframe = 0;
var playspeed;
var SPS;    // Particle solid particle system
var wallSPS // Wall solid particle system
var scale = 12;
var pbmult = 1;
var frameTime = 17;
var tTimer;

// Get canvas DOM
var canvas = document.getElementById("viewport");
var baby;

window.onload = function() {
  canvas = document.getElementById("viewport");  
  load();
}

async function load() {
  $.getJSON("./posQ.json", function(json) {
    posQ = json;
  });
  $.getJSON("./wallQ.json", function(json) {
    wallQ = json;
  });
  console.log("loaded files");
}

function loadScene() {
  wakeBaby();
}

// Function attached to "Load" button
async function wakeBaby() {
  // Reset step counter
  step = 0;
  console.log("Baby awake");  
  // Create engine and scene, dispose of old ones if applicable
  try {
    scene.dispose();
    engine.dispose();
  }
  catch (error) {
    baby = new BABYLON.Engine(canvas, true);
    var scene = createScene(baby);
    baby.runRenderLoop(function(){
      scene.render();
    });
  }
}

function updateScene() {
  // Update mesh and particle properties from the Render Settings
  SPS.updateParticle = newParticleColors;
  SPS.setParticles();
}

var newParticleColors = function(particle) {
  var pid = particle.idx;
  var color = document.getElementById("colSelect").value;
  var group = document.getElementById("groupSelect").value.split(",");
  if (group[0] <= pid && pid < group[1]) {
    particle.color = BABYLON.Color3.FromHexString(color);    
  }  
}

// Function attached to "Start/Stop" button 
function startStop(s) {
  if (s && !playing) {
    next();
    //playing = !playing;
  }
  else {
    clearTimeout(tTimer);
  }
  playing = !playing;
}

function next() {
  stepScene();
  tTimer = setTimeout("next()", frameTime); // Every frameTime milliseconds
}

function stepScene() {
  if (posQ.length === 0) {return;}
  if (playframe > posQ.length) {startStop();return;}
  // Get latest positions, update step counter
  pos = posQ[playframe];
  playframe += pbmult;
  step += pbmult;
  // Update particle positions in Babylon SolidParticleSystem
  SPS.updateParticle = updateParticle;
  SPS.setParticles();
  // Update wall positions in scene 
  // if (wallQ[0].length > 1) {
    // wallmove = wallQ[playframe];
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

var updateWalls = function(wall){
  var wid = wall.idx;
  wall.position.x -= wallmove[wid][0]*scale*pbmult;
  wall.position.y -= wallmove[wid][1]*scale*pbmult;
  wall.position.z -= wallmove[wid][2]*scale*pbmult;
}

var createScene = function(engine) {
  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(.8, .8, .8);
    // Set up camera
  var camera = new BABYLON.ArcRotateCamera("Camera", 30, 1, 30, new BABYLON.Vector3(7, 5, 4), scene);
  camera.attachControl(canvas, true);
  // Create a basic light, aiming 0,1,0 - meaning, to the sky
  var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);
  // Create a built-in "ground" shape;
  console.log(BABYLON);
  console.log(scene);
  console.log(scale);
  //console.log(new BABYLON.Vector3((scale/2),0,(scale/2));
  var ground = BABYLON.Mesh.CreateGround('ground1', scale*10, scale*10, 20, scene);
  ground.position = new BABYLON.Vector3((scale/2),0,(scale/2));
  var groundmesh = new BABYLON.StandardMaterial("groundmesh", scene);
  groundmesh.wireframe = true;
  ground.material = groundmesh;
  // Create APLPhys walls 
  // wallSPS = new BABYLON.SolidParticleSystem("babywalls", scene);
  // var wallPos = [];
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
  // Get this frame's atom positions
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