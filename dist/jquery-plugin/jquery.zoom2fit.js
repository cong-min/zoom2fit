/*
	zoom2fit jquery-plugin beta 0.1.0
	GitHub - https://github.com/mcc108/zoom2fit
	Cong Min - http://congm.in
*/
$.fn.zoom2fit = function(options) {
	if (this.length === 0) {
		return this;
    }
    if (this.length > 1) {
    	this.each(function() {
    		$(this).zoom2fit(options);
    	});
	    return this;
    }
	/* 参数取值：
	   overlay <=> 是否蒙层true/false
	   x <=> 初始在x轴的位置，左/右，left/rgiht
	   y <=> 初始在y轴的位置，上/下，top/bottom
	   zoom <=> 初始大小，相对于原始尺寸的倍数
	   speed <=> 动画速度，单位ms
	   默认值：
	   overlay <- false  默认无蒙层
	   x <- right  y <-bottom  默认右下角
	   zoom <- 1  默认初始大小为原始尺寸
	   speed <- 2000  默认动画速度2s(2000ms)
	*/
	var defaults = {
		overlay: false,
		x:  "right",
		y:  "bottom",
		zoom: 1,
		speed: 2000
	};
	var o = $.extend({}, defaults, options);
	var zoom2fit, zoom2fit_obj;
	var zoom2fit_height, zoom2fit_width;
	var zoom2fit_obj_height, zoom2fit_obj_width;
	/* zoom2fit <=> .zoom2fit-box
	   zoom2fit_obj <=> .zoom2fit-box img/video
	*/
	zoom2fit = this;
	zoom2fit_obj = ($(this).find("img").length) ? $(this).find("img") : $(this).find("video");
	zoom2fit.css({
		"position": "fixed",
		"z-index": "1001",
		"cursor": "pointer",
		"-webkit-transition": "all " + Math.round(o.speed/100)/10 + "s",  /* 放大动画时间 [可修改] */
		"transition": "all " + Math.round(o.speed/100)/10 + "s"  /* 放大动画时间 [可修改] */
	});
	zoom2fit.css(o.x, 0);
	zoom2fit.css(o.y, 0);
	if(o.overlay === true){
		zoom2fit.css("background-color", "rgba(0,0,0,0.2)");  /* 背景蒙层（若不需要可删掉）[可修改] */
	}
	zoom2fit_obj.css({
		"object-fit": "scale-down",
		"height": "100%",
		"width": "100%"
	});

	/* 图片触发load事件或视频触发loadedmetadata事件后，执行函数：
		获取图片或视频高宽，再对box设置等比例高宽
	*/
	zoom2fit_obj.on("load loadedmetadata", function () {
        zoom2fit_obj_width = this.videoWidth || $(this).width();
        zoom2fit_obj_height = this.videoHeight || $(this).height();
		zoom2fit_height = Math.round(zoom2fit_obj_height * o.zoom);
		zoom2fit_width = Math.round((zoom2fit_obj_width / zoom2fit_obj_height) * zoom2fit_height);
		zoom2fit.css({
			"height": zoom2fit_height,
			"width": zoom2fit_width
		});
    });
	/* 放大缩小切换 */
	var flag = 1;
	zoom2fit.click(function(){
		 if(flag == 1){
		 	$(this).css({
				"height": "100%",
				"width": "100%"
			});
            flag = 0;
        }else{
		    $(this).css({
				"height": zoom2fit_height,
				"width": zoom2fit_width
			});
            flag = 1;
        }
	});
};
