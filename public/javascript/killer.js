var browsers = [ {
  title : 'Chrome',
  url : 'http://www.google.com/chrome/?hl=zh-CN'
}, {
  title : 'Firefox ',
  url : 'http://www.mozillaonline.com/'
}, {
  title : 'Opera',
  url : 'http://www.opera.com/'
}, {
  title : 'Safari',
  url : 'http://www.apple.com.cn/safari/'
} ];
if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
  $.kill('image/kill.jpg', 640, 284, 150, 200, browsers);
}