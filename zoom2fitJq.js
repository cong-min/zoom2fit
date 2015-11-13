/*
	2015.10.14
	Cong Min - http://congm.in
	GitHub - https://github.com/mcc108/zoom2fit
*/
$.fn.zoom2fit = function(options) {
	var o = {
		overlay:  options.overlay || false,
		x:  options.x || "right",
		y:  options.y || "bottom",
		zoom:  options.zoom || 1
	};
	var zoom2fit, zoom2fit_obj;
	var zoom2fit_height, zoom2fit_width;
	var zoom2fit_obj_height, zoom2fit_obj_width;
	zoom2fit = this;
	zoom2fit_obj = ($(this).find("img").length) ? $(this).find("img") : $(this).find("video");
	zoom2fit.css({
		"cursor": "pointer",
		"position": "fixed",
		"z-index": "1008",
		"object-fit": "scale-down",
		"-webkit-transition": "all 2s",
		"-o-transition": "all 2s",
		"transition": "all 2s"
	});
	zoom2fit.css(o.x, 0);
	zoom2fit.css(o.y, 0);
	if(o.overlay === true){
		zoom2fit.css("background-color", "rgba(0,0,0,0.2)");
	}
	zoom2fit_obj.css({
		"height": "100%",
		"width": "100%",
		"object-fit": "scale-down"
	});
	// but it have some problem
	// sometimes images don't run the following code
	console.log(zoom2fit_obj);
	zoom2fit_obj.on("load loadedmetadata", function () {
		console.log(this);
        zoom2fit_obj_width = this.videoWidth || $(this).width();
        zoom2fit_obj_height = this.videoHeight || $(this).height();
		zoom2fit_height = Math.round(zoom2fit_obj_height * o.zoom);
		zoom2fit_width = Math.round((zoom2fit_obj_width / zoom2fit_obj_height) * zoom2fit_height);
		zoom2fit.css({
			"height": zoom2fit_height,
			"width": zoom2fit_width
		});
    });
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
