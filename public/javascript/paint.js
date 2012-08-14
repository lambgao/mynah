var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var canvas;
var context;
var clearBtn;
var canvasWidth = 800;
var canvasHeight = 400;
prepareCanvas();
/**
 * Creates a canvas element.
 */
function prepareCanvas() {
  canvas = document.getElementById('canvas');
  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  context = canvas.getContext("2d");

  clearBtn = document.getElementById('clearBtn');
  // Add mouse events
  // ----------------
  var press = function(e) {
    // Mouse down location
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    paint = true;
    addClick(mouseX, mouseY, false);
    redraw();
  };

  var drag = function(e) {
    if (paint) {
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
    // Prevent the whole page from dragging if on mobile
    e.preventDefault();
  };

  var release = function(e) {
    paint = false;
    redraw();
  };

  var cancel = function(e) {
    paint = false;
  };

  var clear = function(e) {
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    clearCanvas();
  };

  // Add mouse event listeners to canvas element
  canvas.addEventListener("mousedown", press, false);
  canvas.addEventListener("mousemove", drag, false);
  canvas.addEventListener("mouseup", release);
  canvas.addEventListener("mouseout", cancel, false);

  // Add touch event listeners to canvas element
  canvas.addEventListener("touchstart", press, false);
  canvas.addEventListener("touchmove", drag, false);
  canvas.addEventListener("touchend", release, false);
  canvas.addEventListener("touchcancel", cancel, false);

  // Add mouse event listeners to canvas element
  clearBtn.addEventListener("click", clear);
}

function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function clearCanvas() {
  context.fillStyle = '#ffffff'; // Work around for Chrome
  context.fillRect(0, 0, canvasWidth, canvasHeight); // Fill in the canvas with
  // white
  canvas.width = canvas.width; // clears the canvas
}

function redraw() {
  clearCanvas();

  var radius = 5;
  context.strokeStyle = "#000000";
  context.lineJoin = "round";
  context.lineWidth = radius;

  for ( var i = 0; i < clickX.length; i++) {
    context.beginPath();
    if (clickDrag[i] && i) {
      context.moveTo(clickX[i - 1], clickY[i - 1]);
    } else {
      context.moveTo(clickX[i] - 1, clickY[i]);
    }
    context.lineTo(clickX[i], clickY[i]);
    context.closePath();
    context.stroke();
  }
}

//document.onselectstart = function() {
//  return false;
//}
