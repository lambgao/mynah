var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var canvas;
var context;
var canvasWidth = 800;
var canvasHeight = 400;
prepareCanvas();
/**
* Creates a canvas element.
*/
function prepareCanvas()
{
  canvas =  document.getElementById('canvas');
  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  context = canvas.getContext("2d");
  
  // Add mouse events
  // ----------------
  $('#canvas').mousedown(function(e)
  {
    // Mouse down location
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
    
    paint = true;
    addClick(mouseX, mouseY, false);
    redraw();
  });
  
  $('#canvas').mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });
  
  $('#canvas').mouseup(function(e){
    paint = false;
      redraw();
  });
  
  $('#canvas').mouseleave(function(e){
    paint = false;
  });
  
  $('#clearCanvas').mousedown(function(e)
  {
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    clearCanvas(); 
  });
}

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function clearCanvas()
{
  context.fillStyle = '#ffffff'; // Work around for Chrome
  context.fillRect(0, 0, canvasWidth, canvasHeight); // Fill in the canvas with white
  canvas.width = canvas.width; // clears the canvas 
}

function redraw()
{
  clearCanvas();
  
  var radius = 5;
  context.strokeStyle = "#000000";
  context.lineJoin = "round";
  context.lineWidth = radius;
      
  for(var i=0; i < clickX.length; i++)
  {   
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
    }else{
      context.moveTo(clickX[i]-1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.stroke();
  }
}

document.onselectstart=function(){return false;}
