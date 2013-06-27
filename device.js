if(device) var _device = device;
var device = {};
(function(d){
	d.version = 0.0.1;
	var ua = navigator.userAgent.toLowerCase();
	console.log(ua);
	// /////////////////////////////////////////////////////////////////////////
	// iPhone & iPad の設定
	// /////////////////////////////////////////////////////////////////////////
	if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0){
		d.name = ua.indexOf('iphone') > 0 ? 'iPhone': 'iPad';
		d.os = 'iOS';
		ua.replace(/cpu[ ]?os[ ]?([0-9]*[_]*[0-9]*[_]*[0-9]*[_]*[0-9]*)/,function(data,hit){
			d.os_version = hit;
		});
	}
	// /////////////////////////////////////////////////////////////////////////
	// Android の設定
	// /////////////////////////////////////////////////////////////////////////
	else if(ua.indexOf('android') > 0){
		d.os = 'Android';
		ua.replace(/android[ ]?([0-9]*[¥.]*[0-9]*[¥.]*[0-9]*[¥.]*[0-9]*)/,function(data,hit){
			d.os_version = hit;
		});
	}
	else{
		d.name = 'PC';
	}
})(device);