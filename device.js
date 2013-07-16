if(device) var _device = device;
var device = {};
(function(d){
	d.version = '0.0.5';
	var ua = navigator.userAgent.toLowerCase();
	var app = navigator.appVersion.toLowerCase();

	d.dummy_flg = false;
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
			alert(d.os_version.all);
			// chrome
			if(ua.indexOf('crios') > 0){
				d.browser = 'Chrome';
				// ブラウザのバージョン
				ua.replace(/crios\/[ ]?([0-9,¥.]*)/,function(data,hit){
					d.browser_version = {};
					d.browser_version.all = hit;
					d.browser_version.place = hit.split('.');
				});
			}
		}
		// =====================================================================
		// Android の設定
		// =====================================================================
		if(ua.indexOf('android') > 0){
			d.os = 'Android';
			// Firefox
			if(ua.indexOf('firefox') > 0){
				d.browser = 'Firefox';
				// ブラウザのバージョン
				ua.replace(/firefox\/[ ]?([0-9,¥.]*)/,function(data,hit){
					d.browser_version = {};
					d.browser_version.all = hit;
					d.browser_version.place = hit.split('.');
				});
			// Chrome
			}else if(ua.indexOf('chrome') > 0){
				d.browser = 'Chrome';
				// ブラウザのバージョン
				ua.replace(/chrome\/[ ]?([0-9,¥.]*)/,function(data,hit){
					d.browser_version = {};
					d.browser_version.all = hit;
					d.browser_version.place = hit.split('.');
				});
			}else{
				d.browser = 'default';
				ua.replace(/android ([0-9,¥.]*)/,function(data,hit){
					d.os_version = {};
					d.os_version.all = hit;
					d.os_version.place = hit.split('.');
				});
			}
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
		// ブラウザ IE の設定
		// =====================================================================
		if(app.indexOf('msie') > 0){
			d.browser = 'IE';
			if(app.indexOf('trident') > 0) d.engine = 'Trident';
			// ブラウザのバージョン
			ua.replace(/msie ([0-9,¥.]*)/,function(data,hit){
				d.browser_version = {};
				d.browser_version.all = hit;
				d.browser_version.place = hit.split('.');
			});
		}
		// =====================================================================
		// ブラウザ FireFox の設定
		// =====================================================================
		else if(app.indexOf('firefox') > 0){
			d.browser = 'FireFox';
			// ブラウザのバージョン
			ua.replace(/firefox\/[ ]?([0-9,¥.]*)/,function(data,hit){
				d.browser_version = {};
				d.browser_version.all = hit;
				d.browser_version.place = hit.split('.');
			});
		}
		// =====================================================================
		// ブラウザ Chrome の設定
		// =====================================================================
		else if(app.indexOf('chrome') > 0){
			d.browser = 'Chrome';
			// ブラウザのバージョン
			ua.replace(/chrome\/[ ]?([0-9,¥.]*)/,function(data,hit){
				d.browser_version = {};
				d.browser_version.all = hit;
				d.browser_version.place = hit.split('.');
			});
		}
		// =====================================================================
		// ブラウザ Safari の設定
		// =====================================================================
		else if(app.indexOf('safari') > 0){
			d.browser = 'Safari';
			ua.replace(/version\/[ ]?([0-9,¥.]*)/,function(data,hit){
				d.browser_version = {};
				d.browser_version.all = hit;
				d.browser_version.place = hit.split('.');
			});
		}
	}
	// /////////////////////////////////////////////////////////////////////////
	// メソッド
	// /////////////////////////////////////////////////////////////////////////
	dummy_data = {
		iphone:{
			dummy_flg:true,
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