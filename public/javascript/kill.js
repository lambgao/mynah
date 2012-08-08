$.kill = function(src, width, height, top, distance, browsers) {
  var num = browsers.length;
  var dw = width / num;
  height = height / 2;
  distance = distance / 2;
  var left = ($(document).width() - width) / (num + 1);
  var leftl = left * (num + 1) / 2;
  var $l = new Array();
  var $t = new Array();
  $('html,body').animate({
    scrollTop : 0
  });
  $('<div></div>', {
    id : 'hBg',
    css : {
      width : '100%',
      height : $(document).height(),
      background : '#000',
      display : 'none',
      position : 'absolute',
      left : 0,
      top : 0,
      zIndex : 998
    }
  }).appendTo(document.body).fadeTo("slow", 0.8, function() {
    for ( var i = 0; i < 2; i++) {
      for ( var m = 0; m < num; m++) {
        var l = left * (m + 1) + dw * m;
        var t = top - distance + i * (height + 2 * distance);
        var id = m + (i * num);
        $('<div></div>', {
          id : 'adb' + id,
          width : dw,
          height : height,
          css : {
            position : 'absolute',
            background : '#000 url(\'' + src + '\') no-repeat ' + m * (-dw) + 'px ' + (-i * height) + 'px',
            display : 'none',
            zIndex : '999',
            left : l,
            top : t
          }
        }).appendTo(document.body).animate({
          left : leftl + dw * m,
          top : top + height * i,
          opacity : 'show'
        }, 'slow');
        $l.push(l);
        $t.push(t);
        if (i != 0) {
          $('<a/>', {
            id : 'browser' + id,
            href : browsers[m].url,
            title : browsers[m].title,
            target : '_blank',
            width : dw,
            height : height,
            css : {
              position : 'absolute',
              display : 'block'
            }
          }).appendTo($('#adb' + id));
        }
      }
    }
  }).click(function() {
    num = num * 2;
    for ( var i = 0; i < num; i++) {
      $('#adb' + i).stop().animate({
        left : $l[i],
        top : $t[i],
        opacity : 'hide'
      }, '1000', function() {
        $(this).remove();
      });
    }
    $(this).remove();
  });
}