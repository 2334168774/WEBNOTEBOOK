var np = {};
np.wrap = true;
np.fontFamily = 'Arial';
np.fontStyle = '常规';
np.fontSize = '16';
np.fontHandler = function (a) {
  np.fontFamily = a.family;
  np.fontStyle = a.style;
  np.fontSize = a.size;
};
$(function () {
  var $body = $('body');
  var menubar = new Menubar(np.menuData);
  var editor = new Editor(np);
  $body.click(function () {
    editor.setFont(np);
    menubar.hideMenu();
    editor.focus();
  });

});
