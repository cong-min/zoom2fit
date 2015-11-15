zoom2fit - Zoom To Fit（beta.1.0）
===========================

video or image Zoom To Fit in browser with js <br>
一个将图片或视频放大至自适合浏览器窗口大小的js

>   Author:  Cong Min <br>
>   Website:  [congm.in](http://congm.in) <br>
>   Blog:  [i.congm.in](http://i.congm.in) <br>
>   E-mail:  mincong@congm.in <br>

****

### 使用须知：
#### 支持的浏览器
`zoom2fit`主要原理是使用了css3中的新属性`object-fit`，支持的浏览器参考：
http://caniuse.com/#search=object-fit
* `object-fit`属性不支持所有IE浏览器及Edge浏览器
* `object-fit`属性不支持安卓4.4以下的安卓浏览器
* 敬请期待兼容性更好的插件`zoom2fit-plus`发布

#### 版本迭代
* `beta.0.1`（2015.11.15）：测试第一版发布
    * 目前只支持图片与视频的初始位置为窗口的四个角
    * 支持图片与视频的窗口自适应放大


## 文档
### 开始使用
目前有两种方式供你选择使用：

|         | css & JavaScript | Jquery Plugin      |
|:-------:|:----------------:|:------------------:|
| dist文件 | zoom2fit.html    | jquery.zoom2fit.js |
| Demo    | [zoom2fit:css&js](http://code.congm.in/zoom2fit/demo/demoByCss&js.html)  | [zoom2fit:jquery-plugin](http://code.congm.in/zoom2fit/demo/demoByJquery-plugin.html) |

#### 目录结构
```
zoom2fit
 ├─ dist
 │   ├─ css&js           //方式一
 │   |   └─ zoom2fit.html         //html&css&js
 |   |   
 |   └─ jquery-plugin    //方式二
 |       ├─ jquery.zoom2fit.js    //jquery plugin
 |       └─ jquery.zoom2fit.min.js
 |
 ├─ demo
 │   ├─ demoByCss&js.html           //方式一:Demo页面
 |   ├─ demoByJquery-plugin.html    //方式二:Demo页面
 |   ├─ jquery.zoom2fit.js          //jquery plugin
 |   └─ jquery.min.js               //jquery.1.11.3.min.js
 |     
 ├─ test         //存放开发与调试过程中一些测试代码的文件夹
 └─ README.md    //说明及文档
```

#### 方式一：css & JavaScript
* 下载`dist/css&js/zoom2fit.html`文件或`demo/demoByCss&js.html`文件

##### 分析代码结构：
1、`html`部分
* `img`图片
```
<!-- 图片 -->
<!-- id主要用于设置初始时css样式 -->
<div id="img_box" class="zoom2fit_box">
    <img src="zoom2fit.jpg" />
</div>
```

* `video`视频
```
<!-- 视频 -->
<!-- id主要用于设置初始时css样式 -->
<div id="video_box" class="zoom2fit_box">
    <video autoplay="autoplay">
        <source src="zoom2fit.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>
</div>
```

2、`css`部分
* `id`：主要用于设置初始时css样式
```
/* #img_box, #video_box通用 */
#box{
    position: fixed;
    top: 0;
    left: 0;
    /* 初始位置
     左上角 top: 0; left: 0;
     右上角 top: 0; right: 0;
     左下角 bottom: 0; left: 0;
     右下角 bottom: 0; right: 0;
    */
    width: 150px;   
    height: 228px;
    /* 初始大小
     [css高、宽需自行修改]
     本例原始尺寸 534 × 811
     box的高宽比例应与内部图片或视频的高宽比例相同
    */
}
```

* `class`：核心css样式
```
.zoom2fit_box{
    cursor: pointer;
    -webkit-transition: all 2s;   /* 放大动画时间 */
    transition: all 2s;   /* 放大动画时间 */
}
.zoom2fit_box>img, .zoom2fit_box>video, .zoom2fit_box.zoom2fit_i{
    object-fit: scale-down;
    height: 100% !important;
    width: 100% !important;
}
```

3、`js`部分
* `jquery`：如果使用jquery，则js代码为
```
$(function(){
    var zoom2fit_obj = $('.zoom2fit_box');
    zoom2fit_obj.click(function(){
        $(this).toggleClass("zoom2fit_i");
    });
});
```

* `javascript`：如果不使用jquery，则js代码为
```
/* 用js模拟jquery中toggleClass()方法 */
var zoom2fit_f = {
    hasClass: function(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function(obj, cls) {
        if (!this.hasClass(obj, cls)){
            obj.className += " " + cls;
        };
    },
    removeClass: function(obj, cls) {
        if (this.hasClass(obj, cls)){
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, '');
        };
    },
    toggleClass: function(obj, cls){
        if(this.hasClass(obj, cls)){
            this.removeClass(obj, cls);
        }else{
            this.addClass(obj, cls);
        };
    }
};
/* 核心js */
window.onload = function(){
    var zoom2fit_obj = document.querySelectorAll('.zoom2fit_box');
    for(var m = 0; m < zoom2fit_obj.length; m++){
        zoom2fit_obj[m].onclick = function(){
            zoom2fit_f.toggleClass(this,"zoom2fit_i");
        };
    };
};
```

##### 组装你的代码：
自定义你的html&css&js，可参考[Demo:css&js](http://code.congm.in/zoom2fit/demo/demoByCss&js.html)


#### 方式二：Jquery Plugin
* 下载`jquery`文件：[jquery.com](http://jquery.com)或`demo/jquery.min.js`
* 下载`dist/jquery-plugin/jquery.zoom2fit.min.js`文件

##### 引入js文件：
在`body`标签前插入代码：
```
<script src="jquery.min.js"></script>
<script src="jquery.zoom2fit.min.js"></script>
```
