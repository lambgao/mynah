var browsers = [ {
  title : 'Firefox',
  url : 'http://www.mozillaonline.com/'
}, {
  title : 'Chrome',
  url : 'http://www.google.com/chrome/?hl=zh-CN'
}, {
  title : 'Safari',
  url : 'http://www.apple.com.cn/safari/'
}, {
  title : 'Opera',
  url : 'http://www.opera.com/'
}, {
  title : 'IE9',
  url : 'http://http://windows.microsoft.com/ie9/'
} ];
if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
  $.kill('image/kill.jpg', 625, 400, 100, 200, browsers);
}