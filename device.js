if(device) var _device = device;
var device = {};
(function(d){
	d.version = '0.0.35';
	var ua = navigator.userAgent.toLowerCase();
	var app = navigator.appVersion.toLowerCase();

	// /////////////////////////////////////////////////////////////////////////
	// スマホ
	// /////////////////////////////////////////////////////////////////////////
	if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0){
		// =====================================================================
		// iPhone & iPad の設定
		// =====================================================================
		if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0){
			d.name = ua.indexOf('iphone') > 0 ? 'iPhone': 'iPad';
			d.os = 'iOS';
			ua.replace(/os ([0-9,_]*)/,function(data,hit){
				d.os_version = {};
				d.os_version.all = hit;
				d.os_version.place = hit.split('_');
			});
		}
		// =====================================================================
		// Android の設定
		// =====================================================================
		if(ua.indexOf('android') > 0){
			d.os = 'Android';
			ua.replace(/android ([0-9,¥.]*)/,function(data,hit){
				d.os_version = {};
				d.os_version.all = hit;
				d.os_version.place = hit.split('.');
			});
		}
		// =====================================================================
		// スマホ共通設定
		// =====================================================================
		// 傾き
		window.addEventListener('devicemotion',function devicemotion_func(e){
			d.devicemotion = true;
			window.removeEventListener('devicemotion',devicemotion_func);
		});
		// 方位
		window.addEventListener('deviceorientation',function devicemotion_func(e){
			d.deviceorientation = true;
			window.removeEventListener('deviceorientation',devicemotion_func);
		});
	}
	// /////////////////////////////////////////////////////////////////////////
	// PC の設定
	// /////////////////////////////////////////////////////////////////////////
	else{d.name = 'PC';
		// =====================================================================
		// IE の設定
		// =====================================================================
		if(app.indexOf('msie') > 0){
			d.browser = 'IE';
			if(app.indexOf('trident') > 0) d.engine = 'Trident';
		}
		// =====================================================================
		// FireFox の設定
		// =====================================================================
		else if(app.indexOf('firefox') > 0){
			d.browser = 'FireFox';
		}
		// =====================================================================
		// Chrome の設定
		// =====================================================================
		else if(app.indexOf('chrome') > 0){
			d.browser = 'Chrome';
		}
		// =====================================================================
		// Safari の設定
		// =====================================================================
		else if(app.indexOf('safari') > 0){
			d.browser = 'Chrome';
		}
	}
	// /////////////////////////////////////////////////////////////////////////
	// メソッド
	// /////////////////////////////////////////////////////////////////////////
	dummy_data = {
		iphone:{
			name:'iPhone',
			os:'iOS',
			os_version:{
				all:'6_0_0',
				place:[6,0,0]
			},
			version:d.version
		}
	};
	// =========================================================================
	// dummy
	// =========================================================================
	device.dummy = function(target){
		target = target.toLowerCase();
		device = dummy_data[target];
	};
})(device);