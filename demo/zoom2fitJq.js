/*
	2015.10.14
	Cong Min - http://congm.in
	GitHub - https://github.com/mcc108/zoom2fit
*/
function zoom2fit(className, x, y, height){
	var zoom2fit, zoom2fit_img, zoom2fit_img_height, zoom2fit_img_width, zoom2fit_height, zoom2fit_width;
	zoom2fit = $("." + className);
	zoom2fit_img = $("." + className + " img");
	zoom2fit_img_height = zoom2fit_img.height();
	zoom2fit_img_width = zoom2fit_img.width();
	zoom2fit_height = Math.floor(zoom2fit_img_height * height);
	zoom2fit_width = Math.floor((zoom2fit_img_width / zoom2fit_img_height) * zoom2fit_height);
	zoom2fit.css({
		"height": zoom2fit_height,
		"width": zoom2fit_width,
		"cursor": "pointer",
		"position": "fixed",
		"z-index": "1008",
		"-webkit-transition": "all 2s",
		"-o-transition": "all 2s",
		"transition": "all 2s",
	});
	zoom2fit_img.css({
		"height": "100%",
		"width": "100%",
		"object-fit": "contain",
	});
	zoom2fit.css(x, 0);
	zoom2fit.css(y, 0);
	zoom2fit.click(function(){
		$(this).css({
			"height": "100%",
			"width": "100%",
			"object-fit": "contain",
		});
	});
}