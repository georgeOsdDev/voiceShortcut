/*
 *   detectBrowser.js
 *   Copyright (c) 2012 Oshida.Takeharu
 *   Author : Oshida.Takeharu
 *   Version: 1.0
 *   License: MIT License
 *   Require: jQuery
 */

$(function() {

	var ua = navigator.userAgent;
	var checker = {
		iphone: ua.match(/iPhone/)
		, ipad: ua.match(/iPad/)
		, ipod: ua.match(/iPod/)
		, blackberry: ua.match(/BlackBerry/)
		, android: ua.match(/Android/)
	};

	var browser = 'is_Desktop';
	var mobile = false;
	if(checker.iphone){
		browser = 'is_iPhone';
		mobile = true;
	}
	if(checker.ipad){
		browser = 'is_iPad';
		mobile = true;
	}
	if(checker.ipod){
		browser = 'is_iPod';
		mobile = true;
	}
	if(checker.brackberry){
		browser = 'is_BrackBerry';
		mobile = true;
	}
	if(checker.android){
		browser = 'is_Android';
		mobile = true;
	}
	$('body').addClass(browser);
	if(mobile){
		$('body').addClass('is_Mobile');
	}
	// console.log('browser:' + browser);
	// console.log('is Mobile:' + mobile);
});
