
/* exported menubar editor*/
var np = {};
np.wrap          = true;   
np.fontFamily     = 'Arial'; 
np.fontStyle      = '常规';  
np.fontSize       = '16'; 
np.fontHandler = function(a) {
  np.fontFamily = a.family;
  np.fontStyle = a.style;
  np.fontSize = a.size;
};
$(function() {
  var $body = $('body');
  var menubar =new Menubar(np.menuData);
  var editor=new Editor(np);
  $body.click(function() {
    editor.setFont(np);
    menubar.hideMenu();
    editor.focus();
  });

});

/* global np,
          $dlgAbout,
          $menubar,
          $statusBar,
          $editor,
          dlgFont,
          $dlgSearch,
          $dlgReplace,
          $dlgGoto: true */
/* eslint no-console: ["error", { allow: ["log"]  }] */
/* exported $dlgAbout,
          $menubar,
          $statusBar,
          $editor,
          dlgFont,
          $dlgSearch,
          $dlgReplace,
          $dlgGoto*/
np.menuData = [
  { 
    title: '文件(F)',
    menuItems: [
      {
        title: '新建(N)',
        shortcut: 'Ctrl+N',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '打开(O)...',
        shortcut: 'Ctrl+O',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '保存(S)',
        shortcut: 'Ctrl+S',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '另存为(A)...',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '页面设置(U)...',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '打印(P)...',
        shortcut: 'Ctrl+P',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '退出(X)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      }
    ],
    width: '202px',
    left: '0px'
  },
  { 
    title: '编辑(E)',
    menuItems: [
      {
        title: '撤销(U)',
        shortcut: 'Ctrl+Z',
        enabled: false,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '剪切(T)',
        shortcut: 'Ctrl+X',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '复制(C)',
        shortcut: 'Ctrl+C',
        enabled: false,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '粘贴(P)',
        shortcut: 'Ctrl+V',
        enabled: false,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '删除(L)',
        shortcut: 'Del',
        enabled: false,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '使用 Bing 搜索...',
        shortcut: 'Ctrl+E',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '查找(F)...',
        shortcut: 'Ctrl+F',
        enabled: false,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '查找下一个(N)',
        shortcut: 'F3',
        enabled: false,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '替换(R)...',
        shortcut: 'Ctrl+H',
        enabled: true,
        handler: function() { console.log('未实现!');}
      },
      {
        title: '转到(G)...',
        shortcut: 'Ctrl+G',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '全选(A)',
        shortcut: 'Ctrl+A',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '时间/日期(D)',
        shortcut: 'F5',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
    ],
    width: '218px',
    left: '52px'
  },
  { 
    title: '格式(O)',
    menuItems: [
      {
        title: '自动换行(W)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '字体(F)...',
        shortcut: '',
        enabled: true,
        handler: function() {
          var dlgfont=new dlgFont(np);
          dlgfont.show();
        }
      }
    ],
    width: '156px',
    left: '106px'
  },
  { 
    title: '查看(V)',
    menuItems: [
      {
        title: '状态栏(S)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      }
    ],
    width: '138px',
    left: '162px'
  },
  { 
    title: '帮助(H)',
    menuItems: [
      {
        title: '查看帮助(H)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
      {
        title: '关于记事本(A)',
        shortcut: '',
        enabled: true,
        handler: function() { console.log('未实现!'); }
      },
    ],
    width: '166px',
    left: '216px'
  }
];


/* exported dlgFont np*/
/* global comList: true */
(function(){
  window.dlgFont  = dlgFont ;
  function dlgFont (np){
    this.$dlg = $('<div class="notepad-dlg-mask notepad-dlg-font"><div class="dialogbox notepad-dlgbox"><div class="notepad-dlg-titlebar"><p class="title">字体</p><span class="close-btn" title="关闭">✖</span></div><div class="main notepad-dlg-main"><div class="font-family"><p>字体(F):</p></div><div class="font-style"><p>字形(Y):</p></div><div class="font-size"><p>大小(S):</p></div><fieldset class="sample"><legend>示例</legend><p class="sample-txt">AaBbYyZz</p></fieldset><div class="script"><label>脚本(R):<br><select><option value="西欧语言">西欧语言</option><option value="中文 GB2312">中文 GB2312</option></select></label></div><input class="btn-ok btn" type="button" value="确定"><input class="btn-cancel btn" type="button" value="取消"></div></div></div>');
    this.$btnOk = this.$dlg.find('.btn-ok');
    this.$btnClose = this.$dlg.find('.close-btn');
    this.$btnCancel = this.$dlg.find('.btn-cancel');
    this.$sample = this.$dlg.find('.sample-txt');
    this.$titleBar = this.$dlg.find('.notepad-dlg-titlebar');
    this.fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'];
    this.styles = ['常规', '斜体', '粗体', '粗偏斜体'];
    this.sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
    this.contain=['.notepad-dlg-font .font-family','.notepad-dlg-font .font-style','.notepad-dlg-font .font-size'];
    this.family=np.fontFamily;
    this.style= np.fontStyle ;
    this.size= np.fontSize ;
  
    
    
  }
  dlgFont.prototype.sample = function(){
    this.$sample.css({ 'font-family': this.family, 'font-size': this.size + 'pt' });
    if(this.style == '斜体') {
      this.$sample.css({'font-style': 'italic','font-weight': 'normal'});
      return;
    }
    else if(this.style == '粗体') {
      this.$sample.css({'font-style': 'normal','font-weight': 'bold'});
      return;
    }
    else if(this.style == '粗偏斜体') {
      this.$sample.css({'font-style': 'italic','font-weight': 'bold'});
      return;
    }
    else{
      this.$sample.css({'font-style': 'normal','font-weight': 'normal'});
    }
  };
  dlgFont.prototype.show = function(){
    $('body').append(this.$dlg);
    var that=this;
    var list1 = new comList();
    list1.show({container: this.contain[0],
      width: '176px',
      list: this.fonts,
      select: this.fonts.indexOf(this.family),
      isFont: true,
      isFontStyle: false,
      selectHandler: function(e) {
        that.family = that.fonts[e];
        that.sample();
      }
    });
    var list2 = new comList();
    list2.show({
      container: this.contain[1],
      width: '132px',
      list: this.styles,
      select: this.styles.indexOf(this.style),
      isFont: false,
      isFontStyle: true,
      selectHandler: function(e) {
        that.style = that.styles[e];
        that.sample();
      }
    });
    var list3 = new comList();
    list3.show({
      container: this.contain[2],
      width: '64px',
      list: this.sizes,
      select: this.sizes.indexOf(this.size),
      isFont: false,
      isFontStyle: false,
      selectHandler: function(e) {
        that.size = that.sizes[e];
        that.sample();
      }
    });
    this.sample();
    this.$dlg.find('.dialogbox').draggable({handle: this.$titleBar});

    this.$btnClose.click(function(){
      that.$dlg.remove();
    });
    this.$btnCancel.click(function(){
      that.$dlg.remove();
    });
    this.$btnOk.click(function() {
      np.fontHandler({
        family: that.family,
        style: that.style,
        size: that.size
      });
      that.$dlg.remove();
    });
    this.$dlg.click(function(e) {
      e.stopPropagation();
    });
  };
  
})();

(function(){
  window.Editor = Editor;
  function Editor(np){
    this.$editordom = $('<div class="notepad-editor"><textarea spellcheck="false" auto-size="none"></textarea></div>');
    this.$textArea = this.$editordom.find('textarea');
    this.wrap=np.wrap;
    this.fontFamily =np.fontFamily;
    this.fontStyle =np.fontStyle;  
    this.fontSize =np.fontSize; 
    this.show();
    this.setFont(np);
    
  }
  Editor.prototype.focus = function(){
    this.$textArea.focus();
  };
  Editor.prototype.setWrap = function(){
    if(this.wrap) {
      this.$textArea.attr('wrap', 'soft');
      this.$textArea.css({'overflow-x': 'hidden'});
    } else {
      this.$textArea.attr('wrap', 'off');
      this.$textArea.css({'overflow-x': 'scroll'});
    }
  };
  Editor.prototype.setFont = function(e){
    this.$textArea.css({'font-family': e.fontFamily, 'font-size': e.fontSize + 'pt'});
    if(e.fontStyle === '斜体') {
      this.$textArea.css({'font-style': 'italic','font-weight': 'normal'});
      return;
    }
    if(e.fontStyle === '粗体') {
      this.$textArea.css({'font-style': 'normal','font-weight': 'bold'});
      return;
    }
    if(e.fontStyle === '粗偏斜体') {
      this.$textArea.css({'font-style': 'italic','font-weight': 'bold'});
      return;
    }
    else{
      this.$textArea.css({'font-style': 'normal','font-weight': 'normal'});
      return;
    }
  };
  Editor.prototype.show = function(){
    $('body').append(this.$editordom);
    this.$textArea.trigger('focus');
    this.setWrap();
  };
  
})();

/* exported comList */
function comList() {
  var $comList = $('<div class="notepad-com-list"><input class="editor" type="text"><br><ul class="list"></ul></div>');
  var $editor = $comList.find('.editor');
  var $list = $comList.find('.list');
  var $liArr;
  function fill(cfg) {
    var $item;
    var i = 0;
    if(cfg.isFont==true) {
      for(i=0; i<cfg.list.length; i++) {
        $item = $('<li class="item"></li>');
        $item.css({'font-family': cfg.list[i]});
        $item.html(cfg.list[i]);
        $list.append($item);
      }
    } 
    else if(cfg.isFontStyle==true) {
      for(i=0; i<cfg.list.length; i++) {
        $item = $('<li class="item"></li>');
        if(cfg.list[i] === '斜体') {
          $item.css({'font-style': 'italic'});
        }
        else if(cfg.list[i] === '粗体') {
          $item.css({'font-weight': 'bold'});
        }
        else if(cfg.list[i] === '粗偏斜体') {
          $item.css({'font-weight': 'bold', 'font-style': 'italic'});
        }
        $item.html(cfg.list[i]);
        $list.append($item);
      }
    } 
    else {
      for(i=0; i<cfg.list.length; i++) {
        $item = $('<li class="item"></li>');
        $item.html(cfg.list[i]);
        $list.append($item);
      }
    }
    $liArr = $list.find('.item');
  }
  function init(cfg) {
    var $oldList = $(cfg.container).find('.notepad-com-list');
    if($oldList.length !== 0) $oldList.remove();
    $(cfg.container).append($comList);
    $comList.css({ width: cfg.width });
    fill(cfg);
    $($liArr[cfg.select]).addClass('selected');
    var i=cfg.select;
    $editor.val(cfg.list[i]);
    $editor.select();
  }
  this.show = function(cfg) {
    init(cfg);
    $list.click(function(e) {
      $($liArr[cfg.select]).removeClass('selected');
      cfg.select = cfg.list.indexOf($(e.target).html());
      $($liArr[cfg.select]).addClass('selected');
      $editor.val(cfg.list[cfg.select]);
      $editor.select();
      cfg.selectHandler(cfg.select);
    });
  };
}

/* exported menubar np e*/
/* global menubar : true */
(function(){
  window.Menubar = Menubar;
  function Menubar(menuData){
    this.$menudom = $('<div class="notepad-menubar"></div>');
    this.menus = [];
    this.pull = -1;
    this.menuData=menuData;
    this.$titlesList=null;
    this.show();
  }
  Menubar.prototype.createMenuTitle = function(){
    var that=this;
    var $titles = $('<ul class="menu-title"></ul>');
    for(var i=0; i<this.menuData.length; i++) {
      var $title = $('<li class="title"></li>');
      $title.html(this.menuData[i].title);
      $titles.append($title);
    }
    this.createMenus();
    this.$titlesList = $titles.find('li');
    this.$titlesList.click(function(e){
      that.clickevent(e,$(this).index());
    });
    this.$titlesList.hover(function(e){
      that.hoverevent($(this).index());
    });
    this.$menudom.append($titles);
  };
  Menubar.prototype.clickevent= function(e,index){
    var i = index;
    if(this.pull === -1) {
      this.menus[i].css({ display: 'inline-block' });
      this.pull = i;
    } else if(this.pull !== i) {
      this.menus[this.pull].css({ display: 'none' });
      this.menus[i].css({ display: 'inline-block' });
      this.pull = i;
    }
    else {
      this.menus[this.pull].css({ display: 'none' });
      this.pull = -1;
    }
    e.stopPropagation();
  };
  Menubar.prototype.hoverevent= function(index){
    if(this.pull !== -1) {
      var i = index;
      this.menus[this.pull].css({ display: 'none' });
      this.menus[i].css({ display: 'inline-block' });
      this.pull = i;
    }
    
  };
  Menubar.prototype.createMenus = function(){
    for(var i=0; i<this.menuData.length; i++) {
      var $menus = $('<ul class="menus"></ul>');
      var items = this.menuData[i].menuItems;

      for(var j=0; j<items.length; j++) {
        if(items[j].title === 'hr') {
          var $hr = $('<li class="menu-hr"></li>');
          $menus.append($hr);
        }
        else{
          var $menu = $('<li class="menu-item"></li>');
          $menu.html(items[j].title);
          $menu.attr('data-x', i);
          $menu.attr('data-y', j);
          if(items[j].shortcut !== '') {
            var $shorcut = $('<span class="shortcut"></span>');
            $shorcut.html(items[j].shortcut);
            $menu.append($shorcut);
          }
          if(!items[j].enabled) {
            $menu.addClass('disabled');
          }
          $menus.append($menu);
          var that=this;
          $menu.click(function(e) {
            e.stopPropagation();
            if($(this).hasClass('disabled')) {
              return;
            }
            console.log(this.dataset.x);
            console.log(this.dataset.y);
            var x = this.dataset.x;
            var y = this.dataset.y;
            that.menus[x].css({display: 'none'});
            that.pull = -1;
            that.menuData[x].menuItems[y].handler();
          });
        }
      }
      $menus.css({
        width: this.menuData[i].width,
        left: this.menuData[i].left,
        display: 'none'
      });
      this.$menudom.append($menus);
      this.menus.push($menus);
    }
  };
  Menubar.prototype.hideMenu = function(){
    if(this.pull === -1) return;
    this.menus[this.pull].css({display: 'none'});
    this.pull = -1;
  };
  Menubar.prototype.enabled=function(row, col, isEnabled) {
    var menuItem = this.menus[row].find('.menu-item')[col];
    if(isEnabled) {
      $(menuItem).removeClass('disabled');
    } else {
      $(menuItem).addClass('disabled');
    }
  };
  Menubar.prototype.show = function(){
    this.createMenuTitle();
    $('body').append(this.$menudom);
  };
})();
