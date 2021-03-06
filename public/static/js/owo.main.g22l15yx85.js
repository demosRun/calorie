// Thu Aug 08 2019 13:54:03 GMT+0800 (GMT+08:00)

"use strict";

// 存储页面基本信息
var owo = {
  // 页面默认入口 如果没有设置 则取第一个页面为默认页面
  entry: "one",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "one": {
    "data": {
      "isplay": false,
      "loadComplete": false
    },
    "created": function created() {
      var _this2 = this;

      if (owo.tool.getScreenInfo().ratio > 1) {
        this.query('.loading')[0].style.display = 'none';
        this.query('.load-text')[0].style.display = 'none'; // this.query('.lock')[0].style.display = 'block'

        return;
      }

      var queue = new createjs.LoadQueue();
      queue.on("progress", function (event) {
        _this2.query('.load-text')[0].innerText = '已加载: ' + (queue.progress * 100 | 0) + " %";
      });
      queue.on("complete", function () {
        _this2.data.loadComplete = true;
        _this2.query('.loading-box')[0].style.top = '-100%'; // 两个垃圾桶?从下方出现

        owo.tool.animate('fadeInUp', _this2.query('.one-1')[0]);
        owo.tool.animate('fadeInUp', _this2.query('.one-2')[0]);
        owo.tool.animate('fadeInLeft', _this2.query('.one-3')[0], 400); // 楼从下方向上出现

        owo.tool.animate('fadeInUp', _this2.query('.one-4')[0], 1000);
        owo.tool.animate('fadeInUp', _this2.query('.one-5')[0], 1200);
        owo.tool.animate('fadeInUp', _this2.query('.one-6')[0], 1400);
        owo.tool.animate('fadeInUp', _this2.query('.one-7')[0], 1600);
        owo.tool.animate('fadeInUp', _this2.query('.one-8')[0], 1800); // 马路上的人逐渐出现

        owo.tool.animate('fadeIn', _this2.query('.one-10')[0], 2000);
        owo.tool.animate('fadeIn', _this2.query('.one-11')[0], 2000);
        owo.tool.animate('fadeIn', _this2.query('.one-12')[0], 2000);
        owo.tool.animate('bounceInDown', _this2.query('.one-13')[0], 2500);
        owo.tool.animate('bounceInDown', _this2.query('.one-14')[0], 2500);
        owo.tool.animate('bounceIn', _this2.query('.one-15')[0], 2800);
        setTimeout(function () {
          _this2.start();
        }, 5000);
      }, this); // queue.on("change", (e) => {
      //   console.log(e)
      // });

      queue.loadManifest([{
        src: "./static/resource/one-1.png"
      }, {
        src: "./static/resource/one-2.png"
      }, {
        src: "./static/resource/one-3.png"
      }, {
        src: "./static/resource/one-4.png"
      }, {
        src: "./static/resource/one-5.png"
      }, {
        src: "./static/resource/one-6.png"
      }, {
        src: "./static/resource/one-7.png"
      }, {
        src: "./static/resource/one-8.png"
      }, {
        src: "./static/resource/one-9.png"
      }, {
        src: "./static/resource/one-10.png"
      }, {
        src: "./static/resource/one-11.png"
      }, {
        src: "./static/resource/one-12.png"
      }, {
        src: "./static/resource/one-13.png"
      }, {
        src: "./static/resource/one-14.png"
      }, {
        src: "./static/resource/one-15.png"
      }, {
        src: "./static/resource/two-color2-1.png"
      }, {
        src: "./static/resource/two-color2-2.png"
      }, {
        src: "./static/resource/two-color3-1.png"
      }, {
        src: "./static/resource/two-color3-2.png"
      }, {
        src: "./static/resource/two-color4-1.png"
      }, {
        src: "./static/resource/two-color4-2.png"
      }, {
        src: "./static/resource/two-color5-1.png"
      }, {
        src: "./static/resource/two-color5-2.png"
      }, {
        src: "./static/resource/two-color6-1.png"
      }, {
        src: "./static/resource/two-color6-2.png"
      }, {
        src: "./static/resource/two-color7-1.png"
      }, {
        src: "./static/resource/two-color7-2.png"
      }, {
        src: "./static/resource/two-color8-1.png"
      }, {
        src: "./static/resource/two-color8-2.png"
      }, {
        src: "./static/resource/two-color9-1.png"
      }, {
        src: "./static/resource/two-color9-2.png"
      }, {
        src: "./static/resource/two-color10-1.png"
      }, {
        src: "./static/resource/two-color10-2.png"
      }, {
        src: "./static/resource/code-3.png"
      }, {
        src: "./static/resource/code-4.png"
      }, {
        src: "./static/resource/code-5.png"
      }, {
        src: "./static/resource/man3.png"
      }, {
        src: "./static/resource/man4.png"
      }, {
        src: "./static/resource/man5.png"
      }, {
        src: "./static/resource/woman3.png"
      }, {
        src: "./static/resource/woman4.png"
      }, {
        src: "./static/resource/woman5.png"
      }, {
        src: "./static/resource/qr.png"
      }, {
        src: "./static/resource/two-bg.png"
      }, {
        src: "./static/resource/two-text.png"
      }, {
        src: "./static/resource/stars-3.png"
      }, {
        src: "./static/resource/stars-4.png"
      }, {
        src: "./static/resource/stars-5.png"
      }, {
        src: "./static/resource/text-3.png"
      }, {
        src: "./static/resource/text-4.png"
      }, {
        src: "./static/resource/text-5.png"
      }, {
        src: "./static/resource/stars.mp3"
      }, {
        src: "./static/resource/dingdong.mp3"
      }]); // 滑动提示

      document.addEventListener('WeixinJSBridgeReady', function () {
        _this2.data.isplay = true;
        setTimeout(function () {
          owo.state.bgMusic = new Audio("./static/resource/bg.mp3");
          owo.state.bgMusic.play();
          owo.state.musicIsPlay = true;
        }, 0);
      });
    },
    "start": function start() {
      if (!owo.state.isplay && this.data.loadComplete) {
        owo.go('two', 'scaleDown', 'moveFromBottom', 'scaleDown', 'moveFromTop', null, true);
        owo.state.isplay = true; // 播放音乐

        if (!this.data.isplay) {
          owo.state.bgMusic = new Audio("./static/resource/bg.mp3");
          owo.state.bgMusic.play();
          owo.state.musicIsPlay = true;
        }
      }
    },
    "bgMusic": function bgMusic() {
      if (owo.state.bgMusic) {
        if (owo.state.musicIsPlay) {
          owo.state.bgMusic.pause();
          owo.state.musicIsPlay = false;
          this.query('.music-play')[0].src = 'http://cpc.people.com.cn/img/MAIN/2019/06/119357/images/music-muted.png';
        } else {
          owo.state.bgMusic.play();
          owo.state.musicIsPlay = true;
          this.query('.music-play')[0].src = 'http://cpc.people.com.cn/img/MAIN/2019/06/119357/images/music-active.png';
        }
      }
    }
  },
  "two": {
    "data": {
      "scroller": null,
      "scale": 1,
      "scaleX": 1,
      "userMoveing": false,
      "scrollNumber": null
    },
    "created": function created() {
      var _this3 = this;

      if (!owo.state.isplay || owo.state.isShow) location.replace('');
      var twoBox = this.query('.box')[0];
      var content = $('.content')[0];
      var screen = owo.tool.getScreenInfo();
      this.data.scaleX = 1;
      var translateZ = 0;
      this.data.translateScale = 0;
      this.data.proportion = 0;

      if (screen.ratio > 1) {
        content.style.width = screen.clientWidth * 9 + 'px';
        content.style.height = screen.clientWidth / 1.6 + 'px';
        this.data.scaleX = screen.clientWidth * 10 / 15985;
        translateZ = (screen.clientWidth / 1.6 - screen.clientHeight) / 2;
        this.data.translateScale = translateZ / screen.clientHeight;
        this.data.proportion = screen.clientWidth / 1.6 / screen.clientHeight;
        this.query('.content-item').forEach(function (element) {
          element.style.width = screen.clientWidth + 'px';
        });
      } else {
        content.style.width = screen.clientHeight * 9 + 'px';
        content.style.height = screen.clientHeight / 1.6 + 'px';
        this.data.scaleX = screen.clientHeight * 10 / 15985;
        translateZ = (screen.clientHeight / 1.6 - screen.clientWidth) / 2;
        this.data.translateScale = translateZ / screen.clientWidth;
        this.data.proportion = screen.clientHeight / 1.6 / screen.clientWidth;
        this.query('.content-item').forEach(function (element) {
          element.style.width = screen.clientHeight + 'px';
        });
      }

      var people = this.query('.two-1')[0];
      var peopleWidth = people.width;
      this.$el.style.opacity = '1';
      setTimeout(function () {
        // console.log(isHorizontal)
        _this3.data.scroller = new Scroller(function (left, top, zoom) {
          _this3.data.scrollNumber = isHorizontal ? top : left; // var X = -parseInt(myScroll.x / radio)
          // console.log(X)

          var X = parseInt((_this3.data.scrollNumber + 40) / _this3.data.scaleX); // 使小人脚正好在线上
          // console.log(proportion)

          people.style.bottom = (pathPeople[X] - _this3.data.translateScale) * 100 * _this3.data.proportion + '%'; // people.style.left = scrollNumber + 'px'

          content.style.transform = "translate3d(-".concat(_this3.data.scrollNumber, "px, -").concat(translateZ, "px, 0)");
        }, {
          zooming: false,
          bouncing: false,
          animating: true
        }); // 默认只能翻2屏幕

        _this3.setShowPageNumber(2);

        _this3.$el.style.display = "block";
      }, 100);
      owo.tool.animate('bounceInDown', this.query('.info-text')[0], 500);
      owo.tool.animate('flash', people, 500);
    },
    "setShowPageNumber": function setShowPageNumber(number) {
      var screenInfo = owo.tool.getScreenInfo();

      if (isHorizontal) {
        this.data.scroller.setDimensions(screenInfo.clientWidth, screenInfo.clientHeight, screenInfo.clientWidth, screenInfo.clientHeight * number);
      } else {
        this.data.scroller.setDimensions(screenInfo.clientWidth, screenInfo.clientHeight, screenInfo.clientWidth * number, screenInfo.clientHeight);
      }
    },
    "boxTouchstart": function boxTouchstart() {
      // console.log('开始')
      this.query('.hand')[0].style.display = 'none';
      this.data.userMoveing = true;
      var e = this.$event;
      setTimeout(function () {
        $('.two-1')[0].style.left = '40px';
      }, 100);
      this.data.scroller.doTouchStart(e.touches, e.timeStamp);
    },
    "boxTouchmove": function boxTouchmove() {
      var e = this.$event;
      this.data.scroller.doTouchMove(e.touches, e.timeStamp);
    },
    "boxTouchend": function boxTouchend() {
      // console.log('结束')
      this.data.userMoveing = true;
      var e = this.$event;
      this.data.scroller.doTouchEnd(e.timeStamp);
    },
    "activeScene": function activeScene() {
      var _this4 = this;

      var kacl = parseInt(this.$event.target.getAttribute('kacl'));
      if (owo.state.kacl == undefined) owo.state.kacl = 0;
      owo.state.kacl += kacl; // 获取到父级元素

      var parent = this.$event.target.parentElement;

      if (kacl > 0) {
        parent.getElementsByClassName('kacl')[0].innerText = '+' + kacl + 'kacl';
      } else {
        parent.getElementsByClassName('kacl')[0].innerText = kacl + 'kacl';
      } // 按钮停止闪烁


      this.$event.target.classList.remove('twinkle'); // 标记父元素为已激活状态

      parent.parentElement.classList.add('active'); // 替换图片

      parent.getElementsByClassName('scene')[0].src = parent.getElementsByClassName('scene')[0].src.replace('two-', 'two-color'); // 展示卡路里

      parent.getElementsByClassName('kacl')[0].style.display = 'block'; // 判断点亮了多少个

      var activeLenght = this.query('.content')[0].getElementsByClassName('active').length; // console.log(activeLenght)

      new Audio("./static/resource/click.mp3").play(); // 允许进行下一步

      if (activeLenght < 9) {
        this.setShowPageNumber(activeLenght + 2); // console.log(this.data.scroller)

        setTimeout(function () {
          var screen = owo.tool.getScreenInfo();

          if (screen.ratio > 1) {
            _this4.data.scroller.scrollTo((activeLenght + 2) * screen.clientWidth, 0, true);
          } else {
            _this4.data.scroller.scrollTo(0, (activeLenght + 2) * screen.clientHeight, true);
          }
        }, 1000);
      } else {
        var _screen = owo.tool.getScreenInfo();

        if (_screen.ratio < 1) {
          // 如果已经是最后了弹出ID输入框
          setTimeout(function () {
            _this4.query('.show-box')[0].style.top = '0';
            owo.state.people = 'man';
          }, 500);
        } else {
          owo.tool.toast('更多内容需要竖屏才能继续哦！');
        }
      } // 小人自发的往前走


      var people = $('.two-1')[0];
      var left = 40;
      var screen = owo.tool.getScreenInfo();

      var _this = this;

      function run(num) {
        // console.log(num)
        left += 5;
        var X = parseInt((_this.data.scrollNumber + left) / _this.data.scaleX);
        people.style.left = left + 'px';
        people.style.bottom = (pathPeople[X] - _this.data.translateScale) * 100 * _this.data.proportion + '%';

        if (left < num && !_this.data.userMoveing) {
          setTimeout(function () {
            run(num);
          }, 20);
        }
      }

      this.data.userMoveing = false;
      setTimeout(function () {
        if (screen.ratio > 1) {
          run(screen.clientWidth / 2);
        } else {
          run(screen.clientHeight / 2);
        }
      }, 2000);
    },
    "next": function next() {
      var ID = this.query('.idInput')[0].value;

      if (ID) {
        owo.state.ID = ID;
        owo.go('share', 'scaleDown', 'moveFromBottom', 'scaleDown', 'moveFromTop', null, true);
      } else {
        alert('ID不能为空!');
      }
    },
    "changeMan": function changeMan() {
      this.query('.man')[0].src = "./static/resource/man-active.png";
      this.query('.woman')[0].src = "./static/resource/woman.png";
      owo.state.people = 'man';
    },
    "changeWoman": function changeWoman() {
      this.query('.man')[0].src = "./static/resource/man.png";
      this.query('.woman')[0].src = "./static/resource/woman-active.png";
      owo.state.people = 'woman';
    },
    "bgMusic": function bgMusic() {
      if (owo.state.bgMusic) {
        if (owo.state.musicIsPlay) {
          owo.state.bgMusic.pause();
          owo.state.musicIsPlay = false;
          this.query('.music-play')[0].src = 'http://cpc.people.com.cn/img/MAIN/2019/06/119357/images/music-muted.png';
        } else {
          owo.state.bgMusic.play();
          owo.state.musicIsPlay = true;
          this.query('.music-play')[0].src = 'http://cpc.people.com.cn/img/MAIN/2019/06/119357/images/music-active.png';
        }
      }
    },
    "inputEnd": function inputEnd() {
      console.log('sd');
      $(window).scrollTop(0);
    }
  },
  "share": {
    "created": function created() {
      var _this5 = this;

      // owo.tool.animate('bounceIn', this.query('.erCode')[0], 1000)
      // owo.tool.animate('fadeIn', this.query('.text')[0], 1000)
      // owo.tool.animate('bounceInUp', this.query('.button')[0], 2500)
      var screen = owo.tool.getScreenInfo();
      if (!owo.state.kacl) location.replace('');
      owo.state.isShow = true; // owo.state.people = 'man'

      var start = 5;
      if (owo.state.kacl > 800) start = 4;
      if (owo.state.kacl > 1600) start = 3;
      var bgURL = './static/resource/code-' + start + '.png';
      this.query('.stars')[0].style.backgroundImage = 'url("./static/resource/stars-' + start + '.png")';
      this.query('.title')[0].style.backgroundImage = 'url("./static/resource/text-' + start + '.png")'; // 动画

      setTimeout(function () {
        new Audio("./static/resource/stars.mp3").play();
      }, 800);
      owo.tool.animate('zoomInDown', this.query('.title')[0], 800);
      setTimeout(function () {
        new Audio("./static/resource/dingdong.mp3").play();
      }, 1200);
      owo.tool.animate('rubberBand', this.query('.stars')[0], 1500); // 播放进场声音

      this.query('.card')[0].style.backgroundImage = 'url("./static/resource/' + owo.state.people + start + '.png")';
      this.query('.card')[0].style.height = 1.71 * screen.clientWidth * 0.8 * 4 + 'px';
      this.query('.erCode')[0].style.height = screen.clientWidth * 0.15 * 4 + 'px'; // console.log(this.query('.erCode')[0].offsetWidth)
      // console.log('url("./static/resource/' + owo.state.people + start + '.png")')

      this.query('.text')[0].innerText = '@' + owo.state.ID;
      document.body.classList.remove('horizontal');
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.left = 'unset';
      document.body.style.top = 'unset';
      document.body.style.position = 'relative';
      this.$el.style.backgroundImage = "url(\"".concat(bgURL, "\")"); // 画图
      // const canv = this.query('canvas')[0]
      // canv.width = screen.clientWidth * 4
      // canv.height = screen.clientHeight * 4
      // const ctx = canv.getContext("2d")
      // const bgImg = new Image()
      // bgImg.src = './static/resource/code-' + start + '.png'
      // bgImg.onload = () => {
      //   //以Canvas画布上的坐标(10,10)为起始点，绘制图像
      //   ctx.drawImage(bgImg, 0, 0, canv.width, canv.height)
      //   const cardWidth = canv.width * 0.8
      //   const cardHeight = cardWidth * 1.78
      //   // console.log(cardHeight / 4)
      //   this.query('.card')
      //   ctx.drawImage(this.query('.card')[0], screen.clientWidth * 0.1 * 4, (screen.clientHeight - cardHeight / 4) * 2, cardWidth, cardHeight)
      //   // 二维码
      //   const qrCodeWidth = canv.width * 0.15
      //   ctx.drawImage(this.query('.erCode')[0], screen.clientWidth * 0.3 * 4, screen.clientWidth * 1.27 * 4, qrCodeWidth, qrCodeWidth)
      //   ctx.font="60px Georgia";
      //   ctx.fillText("Hello World!", screen.clientWidth * 0.15 * 4, screen.clientWidth * 0.26 * 4)
      // }

      setTimeout(function () {
        html2canvas(_this5.$el, {
          useCORS: true
        }).then(function (canvas) {
          // console.log(canvas.toDataURL("image/png"))
          var image = _this5.query('.show')[0];

          image.src = canvas.toDataURL("image/png"); // this.query('.button')[0].style.opacity = 1
          // log(image.src.length)
        });
      }, 2000);
    },
    "replay": function replay() {
      location.replace('');
    }
  }
};

/* 方法合集 */
var _owo = {
  /* 对象合并方法 */
  assign: function(a, b) {
    var newObj = {}
    for (var key in a){
      newObj[key] = a[key]
    }
    for (var key in b){
      newObj[key] = b[key]
    }
    return newObj
  },
  /* 运行页面初始化方法 */
  runCreated: function (pageFunction) {
    // 确保created事件只被执行一次
    if (pageFunction["_isCreated"]) {
      if (!pageFunction.show) return
      pageFunction.show.apply(_owo.assign(pageFunction, {
        data: pageFunction.data,
        activePage: window.owo.activePage
      }))
    } else {
      pageFunction["_isCreated"] = true
      if (!pageFunction.created) return
      pageFunction.created.apply(_owo.assign(pageFunction, {
        data: pageFunction.data,
        activePage: window.owo.activePage
      }))
    }
  }
}


/* owo事件处理 */
// 参数1: 当前正在处理的dom节点
// 参数2: 当前正在处理的模块名称
// 参数3: 当前正在处理的模块根dom
_owo.handleEvent = function (tempDom, templateName) {
  var activePage = window.owo.script[owo.activePage]
  
  if (tempDom.attributes) {
    for (let ind = 0; ind < tempDom.attributes.length; ind++) {
      var attribute = tempDom.attributes[ind]
      // 判断是否为owo的事件
      // ie不支持startsWith
      if (attribute.name[0] == ':') {
        var eventName = attribute.name.slice(1)
        var eventFor = attribute.textContent
        switch (eventName) {
          case 'show' : {
            // 初步先简单处理吧
            var temp = eventFor.replace(/ /g, '')
            // 取出条件
            var condition = temp.split("==")
            if (activePage.data[condition[0]] != condition[1]) {
              tempDom.style.display = 'none'
            }
            break
          }
          default: {
            // 处理事件 使用bind防止闭包
            tempDom["on" + eventName] = function(event) {
              // 复制eventFor防止污染
              let eventForCopy = this.eventFor
              // 判断页面是否有自己的方法
              var newPageFunction = window.owo.script[window.owo.activePage]
              // console.log(this.attributes)
              if (templateName && templateName !== owo.activePage) {
                // 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
                if (newPageFunction.template) newPageFunction = newPageFunction.template[templateName]
              }
              // 待优化可以单独提出来
              // 取出参数
              var parameterArr = []
              var parameterList = eventForCopy.match(/[^\(\)]+(?=\))/g)
              
              if (parameterList && parameterList.length > 0) {
                // 参数列表
                parameterArr = parameterList[0].split(',')
                // 进一步处理参数
                
                for (var i = 0; i < parameterArr.length; i++) {
                  var parameterValue = parameterArr[i].replace(/(^\s*)|(\s*$)/g, "")
                  // console.log(parameterValue)
                  // 判断参数是否为一个字符串
                  
                  if (parameterValue.charAt(0) === '"' && parameterValue.charAt(parameterValue.length - 1) === '"') {
                    parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
                  }
                  if (parameterValue.charAt(0) === "'" && parameterValue.charAt(parameterValue.length - 1) === "'") {
                    parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
                  }
                  // console.log(parameterArr[i])
                }
              }
              eventForCopy = this.eventFor.replace(/\(.*\)/, '')
              // console.log(newPageFunction, eventForCopy)
              // 如果有方法,则运行它
              if (newPageFunction && newPageFunction[eventForCopy]) {
                // 绑定window.owo对象
                newPageFunction.$event = event
                newPageFunction[eventForCopy].apply(newPageFunction, parameterArr)
              } else {
                // 如果没有此方法则交给浏览器引擎尝试运行
                eval(this.eventFor)
              }
            }.bind({
              eventFor
            })
          }
        }
      }
    }
  }
  
  // 判断是否有子节点需要处理
  if (tempDom.children) {
    // 递归处理所有子Dom结点
    for (var i = 0; i < tempDom.children.length; i++) {
      // 获取子节点实例
      var childrenDom = tempDom.children[i]

      // 每个子节点均要判断是否为模块
      if (childrenDom.attributes['template'] && childrenDom.attributes['template'].textContent) {
        // 如果即将遍历进入模块 设置即将进入的模块为当前模块
        // 获取模块的模块名
        _owo.handleEvent(childrenDom, childrenDom.attributes['template'].textContent)
      } else {
        _owo.handleEvent(childrenDom, templateName)
      }
    }
  } else {
    console.info('元素不存在子节点!')
    console.info(tempDom)
  }
}
_owo.getarg = function (url) { // 获取URL #后面内容
  if (!url) return null
  const arg = url.split("#");
  return arg[1] ? arg[1].split('?')[0] : null
}

// 页面资源加载完毕事件
_owo.showPage = function() {
  // 取出URL地址判断当前所在页面
  var pageArg = _owo.getarg(window.location.hash)
  // 从配置项中取出程序入口
  var page = pageArg ? pageArg : owo.entry
  if (page) {
    var entryDom = document.querySelector('.ox[template="' + page + '"]')
    if (entryDom) {
      // 显示主页面
      entryDom.style.display = 'block'
      window.owo.activePage = page
      _owo.handlePage(window.owo.script[page], entryDom)
      _owo.handleEvent(entryDom, null)
    } else {
      console.error('入口文件设置错误,错误值为: ', entryDom)
    }
  } else {
    console.error('未设置程序入口!')
  }
  // 设置当前页面为活跃页面
  owo.state.newUrlParam = _owo.getarg(document.URL)
}

/*
  页面跳转方法
  参数1: 需要跳转到页面名字
  参数2: 离开页面动画
  参数3: 进入页面动画
*/
owo.go = function (pageName, inAnimation, outAnimation, backInAnimation, backOutAnimation, param, noBack) {
  // console.log(owo.script[pageName])
  owo.script[pageName]._animation = {
    "in": inAnimation,
    "out": outAnimation,
    "forward": true
  }
  var paramString = ''
  if (param && typeof param == 'object') {
    paramString += '?'
    // 生成URL参数
    for (let paramKey in param) {
      paramString += paramKey + '=' + param[paramKey] + '&'
    }
    // 去掉尾端的&
    paramString = paramString.slice(0, -1)
  }
  // 如果有返回动画那么设置返回动画
  if (backInAnimation && backOutAnimation) {
    owo.script[owo.activePage]._animation = {
      "in": backInAnimation,
      "out": backOutAnimation,
      "forward": false
    }
  }
  if (noBack) {
    location.replace(paramString + "#" + pageName)
  } else {
    window.location.href = paramString + "#" + pageName
  }
}

// url发生改变事件
_owo.hashchange = function (e) {
  // 这样处理而不是直接用event中的URL，是因为需要兼容IE
  owo.state.oldUrlParam = owo.state.newUrlParam;
  owo.state.newUrlParam = _owo.getarg(document.URL); 
  // console.log(owo.state.oldUrlParam, owo.state.newUrlParam)
  // 如果旧页面不存在则为默认页面
  if (!owo.state.oldUrlParam) owo.state.oldUrlParam = owo.entry;
  var newUrlParam = owo.state.newUrlParam;

  // 如果没有跳转到任何页面则跳转到主页
  if (newUrlParam === undefined) {
    newUrlParam = owo.entry;
  }

  // 如果没有发生页面跳转则不需要进行操作
  // 进行页面切换
  switchPage(owo.state.oldUrlParam, newUrlParam);
}

// ios的QQ有BUG 无法触发onhashchange事件
if(/iPhone\sOS.*QQ[^B]/.test(navigator.userAgent)) {
  window.onpopstate = _owo.hashchange;
} else {
  window.onhashchange = _owo.hashchange;
}
// 隐藏旧页面，显示新页面
function dispalyEffect (oldDom, newDom) {
  if (oldDom) {
    // 隐藏掉旧的节点
    oldDom.style.display = 'none'
  }
  // 查找页面跳转后的page
  newDom.style.display = 'block'
}

// 切换页面动画
function animation (oldDom, newDom, animationIn, animationOut, forward) {
  // 动画延迟
  let delay = 0
  // 获取父元素
  var parentDom = newDom.parentElement
  if (!oldDom) {
    console.error('旧页面不存在!')
  }
  oldDom.addEventListener("animationend", oldDomFun)
  newDom.addEventListener("animationend", newDomFun)
  
  oldDom.style.position = 'absolute'

  newDom.style.display = 'block'
  newDom.style.position = 'absolute'
  // 给即将生效的页面加上“未来”标识
  if (forward) {
    newDom.classList.add('owo-animation-forward')
  } else {
    oldDom.classList.add('owo-animation-forward')
  }
  // document.body.style.overflow = 'hidden'

  parentDom.style.perspective = '1200px'
  oldDom.classList.add('owo-animation')
  animationIn.forEach(value => {
    //判断是否为延迟属性
    if (value.startsWith('delay')) {
      const tempDelay = parseInt(value.slice(5))
      if (delay < tempDelay)  delay = tempDelay
    }
    oldDom.classList.add('o-page-' + value)
  })

  newDom.classList.add('owo-animation')
  animationOut.forEach(value => {
    if (value.startsWith('delay')) {
      const tempDelay = parseInt(value.slice(5))
      if (delay < tempDelay)  delay = tempDelay
    }
    newDom.classList.add('o-page-' + value)
  })
  // 旧DOM执行函数
  function oldDomFun (e) {
    // 排除非框架引起的结束事件
    if (e.target.getAttribute('template')) {
      // 移除监听
      oldDom.removeEventListener('animationend', oldDomFun, false)
      // 延迟后再清除，防止动画还没完成
      setTimeout(() => {
        oldDom.style.display = 'none'
        // console.log(oldDom)
        oldDom.style.position = ''
        oldDom.classList.remove('owo-animation')
        oldDom.classList.remove('owo-animation-forward')
        parentDom.style.perspective = ''
        // 清除临时设置的class
        animationIn.forEach(value => {
          oldDom.classList.remove('o-page-' + value)
        })
      }, delay);
    }
  }

  // 新DOM执行函数
  function newDomFun () {
    // 移除监听
    newDom.removeEventListener('animationend', newDomFun, false)
    // 延迟后再清除，防止动画还没完成
    setTimeout(() => {
      // 清除临时设置的style
      newDom.style.position = '';
      newDom.classList.remove('owo-animation');
      newDom.classList.remove('owo-animation-forward');
      animationOut.forEach(function (value) {
        newDom.classList.remove('o-page-' + value);
      });
    }, delay);
  }
}


// 切换页面前的准备工作
function switchPage (oldUrlParam, newUrlParam) {
  var oldPage = oldUrlParam ? oldUrlParam.split('&')[0] : owo.entry
  var newPage = newUrlParam ? newUrlParam.split('&')[0] : owo.entry
  // console.log(oldPage, newPage)
  var oldDom = document.querySelector('.ox[template="' + oldPage + '"]')
  var newDom = document.querySelector('.ox[template="' + newPage + '"]')
  
  if (!newDom) {
    console.error('页面不存在!')
    return
  }
  // console.log(owo.state.animation)
  // 判断是否有动画效果
  if (!owo.script[newPage]._animation) owo.script[newPage]._animation = {}
  // 直接.in会在ie下报错
  var animationIn = owo.script[newPage]._animation['in']
  var animationOut = owo.script[newPage]._animation['out']
  if (animationIn || animationOut) {
    // 如果没用动画参数则使用默认效果
    if (!animationIn || !animationOut) {
      dispalyEffect(oldDom, newDom)
      return
    }
    owo.state.animation = {}
    animation(oldDom, newDom, animationIn.split('&&'), animationOut.split('&&'), owo.state.animation['forward'])
  } else {
    dispalyEffect(oldDom, newDom)
  }
  
  window.owo.activePage = newPage
  _owo.handleEvent(newDom, null)
  _owo.handlePage(window.owo.script[newPage], newDom)
}
/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */
_owo.ready = (function() {               //这个函数返回whenReady()函数
  var funcs = [];             //当获得事件时，要运行的函数
  
  //当文档就绪时,调用事件处理程序
  function handler(e) {
    // 确保事件处理程序只运行一次
    if(window.owo.state.isRrady) return
    window.owo.state.isRrady = true
    //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
    if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
      return
    }
    
    // 运行所有注册函数
    for(var i=0; i<funcs.length; i++) {
      funcs[i].call(document);
    }
    funcs = null;
  }
  //为接收到的任何事件注册处理程序
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false)
    document.addEventListener('readystatechange', handler, false)            //IE9+
    window.addEventListener('load', handler, false)
  } else if(document.attachEvent) {
    document.attachEvent('onreadystatechange', handler)
    window.attachEvent('onload', handler)
  }
  //返回whenReady()函数
  return function whenReady (fn) {
    if (window.owo.state.isRrady) {
      fn.call(document)
    } else {
      funcs.push(fn)
    }
  }
})()

// 执行页面加载完毕方法
_owo.ready(_owo.showPage)


/**
 * 赋予节点动画效果
 * @param  {string} name 动画效果名称
 * @param  {dom} dom 节点
 */
owo.tool.animate = function (name, dom, delay) {
  dom.classList.add(name)
  dom.classList.add('owo-animated')
  if (delay) {
    dom.style.animationDelay = delay + 'ms'
  }
  // 待优化可以单独提出绑定方法
  dom.addEventListener('animationend', animateEnd)
  function animateEnd () {
    // 待优化 感觉不需要这样
    dom.classList.remove(name)
    dom.classList.remove('owo-animated')
    if (delay) {
      dom.style.animationDelay = 'unset'
    }
  }
}/**
 * 获取屏幕信息
 * @return {object} 屏幕信息
 */

owo.tool.getScreenInfo = () => {
  // 有可能不兼容ie
  return {
    clientWidth: window.innerWidth,
    clientHeight: window.innerHeight,
    ratio: window.innerWidth / window.innerHeight,
    // 缩放比例
    devicePixelRatio: window.devicePixelRatio || 1
  }
}/**
 * 显示toast提示 不支持ie8
 * @param  {number} text       显示的文字
 * @param  {number} time       显示时长
 */

owo.tool.toast = (text, time) => {
  if (window.owo.state.toastClock) {
    clearTimeout(window.owo.state.toastClock)
    hideToast()
  }
  if (time === undefined || time === null) {
    // 默认2秒
    time = 2000
  }
  const toast = document.createElement("div")
  toast.setAttribute("id", "toast")
  toast.setAttribute("class", "toast")
  // 设置样式
  toast.style.cssText = "position:fixed;z-index:999;background-color:rgba(0, 0, 0, 0.5);bottom:10%;line-height:40px;border-radius:10px;left:0;right:0;margin:0 auto;text-align:center;color:white;max-width:200px;padding:0 10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"

  toast.innerHTML = text
  document.body.appendChild(toast)
  function hideToast() {
    document.getElementById('toast').outerHTML = ''
    window.owo.state.toastClock = null
  }
  window.owo.state.toastClock = setTimeout(hideToast, time)
}

/* 运行页面所属的方法 */
_owo.handlePage = function (newPageFunction, entryDom) {
  // console.log(entryDom)
  newPageFunction['$el'] = entryDom
  // 快速选择器
  newPageFunction['query'] = function (str) {
    return this.$el.querySelectorAll(str)
  }
  /* 判断页面是否有自己的方法 */
  if (!newPageFunction) return
  // console.log(newPageFunction)
  // 如果有created方法则执行
  if (newPageFunction.created) {
    _owo.runCreated(newPageFunction)
  }
  // debugger
  // 判断页面是否有下属模板,如果有运行所有模板的初始化方法
  for (var key in newPageFunction.template) {
    var templateScript = newPageFunction.template[key]
    // 待修复,临时获取方式,这种方式获取到的dom不准确
    var childDom = entryDom.querySelectorAll('[template="' + key +'"]')[0]
    if (!childDom) {
      console.error('组件丢失！')
      continue
    }
    // 递归处理
    _owo.handlePage(templateScript, childDom)
  }
}