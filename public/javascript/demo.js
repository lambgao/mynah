var canvasWidth = 800;
var canvasHeight = 400;
var CanvasDrawr = function(options) {
  var canvas = document.getElementById(options.id), ctxt = canvas.getContext("2d");
  canvas.setAttribute('width', canvasWidth);
  canvas.setAttribute('height', canvasHeight);
  ctxt.lineWidth = options.size || Math.ceil(Math.random() * 35);
  ctxt.lineCap = options.lineCap || "round";
  ctxt.pX = undefined;
  ctxt.pY = undefined;
  var lines = [ , , ];
  var offset = $(canvas).offset();
  var self = {
    init : function() {
      canvas.addEventListener('touchstart', self.preDraw, false);
      canvas.addEventListener('touchmove', self.draw, false);
    },
    preDraw : function(event) {
      $.each(event.touches,
              function(i, touch) {
                var id = touch.identifier, colors = [ "red", "green", "yellow", "blue", "magenta",
                    "orangered" ], mycolor = colors[Math.floor(Math.random() * colors.length)];
                lines[id] = {
                  x : this.pageX - offset.left,
                  y : this.pageY - offset.top,
                  color : mycolor
                };
              });
      event.preventDefault();
    },
    draw : function(event) {
      var e = event, hmm = {};
      $.each(event.touches, function(i, touch) {
        var id = touch.identifier, moveX = this.pageX - offset.left - lines[id].x, moveY = this.pageY
            - offset.top - lines[id].y;
        var ret = self.move(id, moveX, moveY);
        lines[id].x = ret.x;
        lines[id].y = ret.y;
      });
      event.preventDefault();
    },
    move : function(i, changeX, changeY) {
      ctxt.strokeStyle = lines[i].color;
      ctxt.beginPath();
      ctxt.moveTo(lines[i].x, lines[i].y);
      ctxt.lineTo(lines[i].x + changeX, lines[i].y + changeY);
      ctxt.stroke();
      ctxt.closePath();
      return {
        x : lines[i].x + changeX,
        y : lines[i].y + changeY
      };
    }
  };
  return self.init();
};
$(function() {
  var super_awesome_multitouch_drawing_canvas_thingy = new CanvasDrawr({
    id : "canvas",
    size : 15
  });
});