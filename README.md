zoom2fit - Zoom To Fit
===========================

video or image Zoom To Fit in browser with js <br>
一个将图片或视频放大至自适合浏览器窗口大小的js

>   Author:  Cong Min <br>
>   Website:  [congm.in](http://congm.in) <br>
>   Blog:  [i.congm.in](http://i.congm.in) <br>
>   E-mail:  mincong@congm.in <br>

****

## 文档
#### 使用须知：支持的浏览器
本插件主要使用了css3中的新属性`object-fit`，支持的浏览器参考：


### 开始使用
目前有两种方式供你选择使用：

|         | css & JavaScript | Jquery Plugin      |
|:-------:|:----------------:|:------------------:|
| dist文件 | zoom2fit.html    | jquery.zoom2fit.js |
| Demo    | [zoom2fit:css&js](http://code.congm.in/zoom2fit/demo/demoJq.html)  | [zoom2fit:jquery](http://code.congm.in/zoom2fit/demo/demoJq.html) |

#### 目录结构
```
zomm2fit
 ├─ dist
 │   ├─ css&js
 │   |   └─ zoom2fit.html    //html&css&js
 |   |   
 |   └─ jquery-plugin
 |       ├─ jquery.zoom2fit.js    //jquery plugin
 |       └─ jquery.zoom2fit.min.js
 |
 ├─ demo
 │   ├─ demoByCss&js.html    //方式一:demo
 |   ├─ demoByJquery-plugin.html    //方式二:demo
 |   ├─ jquery.zoom2fit.js    //jquery plugin
 |   └─ jquery.min.js    //jquery.1.11.3.min.js
 |     
 ├─ test    //存放开发与调试过程中一些测试代码的文件夹
 └─ README.md    //说明及文档
```

#### 方式一：css & JavaScript







#### 方式二：Jquery Plugin
在`body`标签前插入代码：
```
<script src="jquery.min.js"></script>
<script src="zoom2fitJq.js"></script>
```
其中`jquery.min.js`及`zoom2fitJq.js`分别为`jquery`与`zoom2fit`的`js`文件地址
