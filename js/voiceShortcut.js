/*
 *   voiceShortcut.js
 *   Copyright (c) 2012 Oshida.Takeharu
 *   Author : Oshida.Takeharu
 *   Version: 1.0
 *   License: MIT License
 *   Require: jQuery,TwitterBootstrap
 */

var langMode = "ja"
	,twitterClient = "tweetie"
	,form = $('#cmdForm')
	,cmd = $('#cmd');

$(function(){

	// hidden address bar
	$(window).bind("orientationchange",function(){
		scrollTo(0,1);
	});
	setTimeout(function(){scrollTo(0,1);},100);

	// bind tooltip
	$('#cmd').tooltip({
		placement:"right"
		,title:"Talk!"
		,delay: { show: 100, hide: 300 }
	});

	//get setting from localStorage
	if(localStorage.getItem('lang')){
		$("#lang").val(localStorage.getItem('lang'));
		langMode = $("#lang").val();
	}
	if(localStorage.getItem('twitterClient')){
		$("#twitterClient").val(localStorage.getItem('twitterClient'));
		twitterClient = $("#twitterClient").val();
	}

	// setDefault
	setLangMode();
	setTwitterClient();
	
	// selected Twitter Client
	$('#twitterClient').bind("change",setTwitterClient);

	// selected Language
	$('#lang').bind("change",setLangMode);


	// Auto Submit for iDevice with Siri
	if ($("body").hasClass("is_iPhone") || $("body").hasClass("is_iPad")){
		var timer = setInterval(function(){
			var txt = cmd.val();
			if (!txt) {
				return false;
			}
			execute(cmd.val());
			return false;
		},500);
	}
});

//command execute
//Inspired by : http://sirilauncher.com/

function execute(txt) {
	// console.log(txt);
	cmd.val('');
	cmd.focus();
	var commands;	
	if (langMode == 'ja'){
		commands = commands_ja;
	}
	if (langMode == 'en'){
		commands = commands_en;
		for (var val in commands_ja){
			commands[val] = commands_ja[val];
		}
	}
	for (var pettern in commands) {
		var url = commands[pettern];
		if (url.mode != undefined){
			var tmp_url = url[twitterClient];
			url = undefined;
			url = tmp_url;
		}
		var re = new RegExp(pettern);
		var match = re.exec(txt.toLowerCase());
		// console.log(match);
		if (match) {
			if (startsWith(url,'http') || startsWith(url,'https')){
				for(var i=0; i<match.length; i++) {
					url = url.replace("{%"+i+"}", encodeURIComponent(match[i]));
				}
				// open new window or tab
				window.open(url);
				// console.log('window.open');
			}else{
				for(var i=0; i<match.length; i++) {
					url = url.replace("{%"+i+"}", match[i]);
				}
				location.href = url;
				// console.log('location.href');
			}
			return false;
		}
	}
}

function setLangMode(){
	langMode = $("#lang option:selected").val();
	localStorage.setItem('lang', langMode);
	if (langMode == 'ja'){
		$('#about_body').html("<p>Siriの機能を使って音声ショートカットを実現します。</p><p>何ができるか知りたければ「ヘルプ」と言ってください。</p><p><a href='http://sirilauncher.com/' target='_blank'>sirilauncher</a>を参考にさせていただきました。</p>");
		$('#help_body').html("<h3>Command List</h3><dl><dt>「○○○」。</dt><dd>指定したクライアントでツイートします。最後に読点「。」まるを入れるのが重要。<br>Siriには「まる」と言えば通じます。</dd><dt>フェイスブック、facebook</dt><dd>フェイスブックアプリを開きます。</dd><dt>再生、music</dt><dd>ipodを開きます。</dd><dt>エスエムエス、sms</dt><dd>smsを開きます</dd><dt>ライン、LINE</dt><dd>LINEのアプリを開きます。</dd><dt>リマインダー</dt><dd>リマインダーを開きます。</dd><dt>ヘルプ</dt><dd>このモーダルを開きます。</dd><dt>HTML</dt><dd>htmlソースを表示します。</dd></dl><hr><dl><dt>siriruncherさんのコマンドも使えます。</dt><dd>sirilauncher/ヘルプ ：<a href='http://sirilauncher.com/help.html' target='_blank'	>http://sirilauncher.com/help.html</a></dd></dl><hr><dl> <dt>and,One More Thing</dt><dd>See & Fork at <a href='http://github.com/georgeOsdDev/voiceShortcut' target='_blank'>github</a>  <img src='img/github-16px.png'></dd></dl>");
		$('#cmd').attr('placeholder',"何する？");
	} else if (langMode == 'en'){
		$('#about_body').html("<p>Voice Shortcut help you to Run the command by voice input.</p><p>If you want to know What this can do, please say 'help'.</p><p>Voice Shortcut is Inspired by : <a href='http://sirilauncher.com/' target='_blank'>sirilauncher</a></p>");
		$('#help_body').html("<h3>Command List</h3><dl><dt>tweet <em>something</em></dt><dd>tweet with selected client</dd><dt>facebook</dt><dd>open facebook app</dd><dt>music</dt><dd>open your ipod</dd><dt>sms</dt><dd>open sms app</dd><dt>LINE</dt><dd>open <a href='line.naver.jp/' target='_blank'>LINE</a> app</dd><dt>reminder</dt><dd>open your reminder</dd><dt>help</dt><dd>show this help</dd><dt>HTML</dt><dd>show html source</dd></dl><hr><dl><dt>You also could use commands from siriruncher.com </dt><dd>sirilauncher ：<a href='http://sirilauncher.com/help.html' target='_blank'>http://sirilauncher.com/help.html</a> in Japanese Mode</dd></dl><hr><dl> <dt>and,One More Thing</dt><dd>See & Fork at <a href='http://github.com/georgeOsdDev/voiceShortcut' target='_blank'>github</a>  <img src='img/github-16px.png'></dd></dl>");
		$('#cmd').attr('placeholder',"What's up?");
	}
}

function setTwitterClient(){
	localStorage.setItem('twitterClient', $("#twitterClient option:selected").val());
	twitterClient = $("#twitterClient").val();
}

function browserSubmit(){
	// console.log('browther submit');
	execute(cmd.val());
	return false;
}

function startsWith(str, prefix){
	return str.indexOf(prefix) == 0;
}