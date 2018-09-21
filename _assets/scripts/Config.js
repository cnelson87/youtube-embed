/**
*	application config
**/

if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

var Config = {
	siteUrl: window.location.origin,
	isIE9: navigator.userAgent.indexOf('MSIE 9') !== -1,
	isIE10: navigator.userAgent.indexOf('MSIE 10') !== -1,
	isIE11: (navigator.userAgent.indexOf('Windows NT') !== -1 && navigator.userAgent.indexOf('rv:11') !== -1),
	isAndroid: /android/i.test(navigator.userAgent),
	isIOS: /iPad|iPhone|iPod/i.test(navigator.userAgent),
	hasFormValidation: typeof document.createElement('input').checkValidity === 'function',
	hasTouch: Boolean('ontouchstart' in window || navigator.maxTouchPoints || navigator.msMaxTouchPoints),
};
