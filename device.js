if(device) var _device = device;
var device = {};
(function(d){
	d.version = '0.0.55';
	var ua  = navigator.userAgent.toLowerCase();
	var app = navigator.appVersion.toLowerCase();

	d.dummy_flg  = false;
	d.smartphone = false;
	d.pc         = false;
	// /////////////////////////////////////////////////////////////////////////
	// スマホ
	// /////////////////////////////////////////////////////////////////////////
	if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0 || ua.indexOf('android') > 0){
		d.smartphone = true;
		// =====================================================================
		// iPhone & iPad の設定
		// =====================================================================
		if(ua.indexOf('iphone') > 0 || ua.indexOf('ipad') > 0){
			d.name = ua.indexOf('iphone') > 0 ? 'iphone': 'ipad';
			d.os = 'ios';
			ua.replace(/os ([0-9,_]*)/,function(data,hit){
				d.os_version = {};
				d.os_version.all = hit;
				d.os_version.place = hit.split('_');
			});
			// chrome
			if(ua.indexOf('crios') > 0){
				d.browser = 'chrome';
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
			d.os = 'android';
			// Firefox
			if(ua.indexOf('firefox') > 0){
				d.browser = 'firefox';
				// ブラウザのバージョン
				ua.replace(/firefox\/[ ]?([0-9,¥.]*)/,function(data,hit){
					d.browser_version = {};
					d.browser_version.all = hit;
					d.browser_version.place = hit.split('.');
				});
			// Chrome
			}else if(ua.indexOf('chrome') > 0){
				d.browser = 'chrome';
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
	else{
		d.name = 'pc';
		d.pc   = true;
		// =====================================================================
		// ブラウザ IE の設定
		// =====================================================================
		if(app.indexOf('msie') > 0){
			d.browser = 'ie';
			if(app.indexOf('trident') > 0) d.engine = 'trident';
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
			d.browser = 'fireFox';
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
			d.browser = 'chrome';
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
			d.browser = 'safari';
			ua.replace(/version\/[ ]?([0-9,¥.]*)/,function(data,hit){
				d.browser_version = {};
				d.browser_version.all = hit;
				d.browser_version.place = hit.split('.');
			});
		}
		// =====================================================================
		d.os = {};
		// =====================================================================
		// OS windowsの設定
		// =====================================================================
		if(ua.indexOf("win") != -1){
			d.os.name = 'windows';
			if(ua.match('windows nt 5.1')) d.os.version = 'xp';
		}
		// =====================================================================
		// OS macの設定
		// =====================================================================
		else if(ua.indexOf("mac") != -1){
			d.os.name = 'mac';
		}
		
	}
	// /////////////////////////////////////////////////////////////////////////
	// メソッド
	// /////////////////////////////////////////////////////////////////////////
	dummy_data = {
		iphone:{
			dummy_flg:true,
			name:'iphone',
			os:'ios',
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