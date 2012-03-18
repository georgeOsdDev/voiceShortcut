/*
 *   commands.js
 *   Copyright (c) 2012 Oshida.Takeharu
 *   Author   : Oshida.Takeharu
 *   Version  : 1.0
 *   License  : MIT License
 *   Require  : jQuery
 *   Imspired : http://sirilauncher.com/
 */

var commands_ja = {

	'^(.*(?=の))(の)(本|書籍|雑誌)$' : 'http://www.amazon.co.jp/gp/aw/rd.html?lc=mqs&url=/gp/aw/s.html&m=aps&at=takeharu0516-22&uid=NULLGWDOCOMO&submit=Go!&__mk_ja_JP=カタカナ&k={%1}',
	'^((ツイッター|ツイート｜twitter|tweet).*)。$' : {'mode':'twitterClient','tweetie':'tweetie://post?message={%3}','echofon':'echofon:///message?{%3}','online':'http://twitter.com/home?status={%3}'},
	'^(.*)。$' : {'mode':'twitterClient','tweetie':'tweetie://post?message={%1}','echofon':'echofon:///message?{%1}','online':'http://twitter.com/home?status={%1}'},
	'^(.*(?=の|を))(の|を)(ツイート|つぶやく)$' : {'mode':'twitterClient','tweetie':'tweetie://post?message={%1}','echofon':'echofon:///message?{%1}','online':'http://twitter.com/home?status={%1}'},
	'^(facebook|フェイスブック)$':'fb://profile',
	'^(ipod|music|ミュージック|再生|音楽)$':'music:',
	'^(sms|エスエムエス)$':'sms:',
	'^(ライン|line)$':'LINE://',
	'^(リマインダー)$':'x-apple-reminder://',
	'^(ibooks|ブックス)$':'itms-bookss:',
	'^(html|ソース)$':'view-source:' + window.location.href,
	'^(ヘルプ)$' : 'javascript:$("#helpModal").modal("show");',

	/*
	 * copy from http://sirilauncher.com/
	 */
	//'^(.*(?=の))(の)(本|書籍)$' : 'http://www.amazon.co.jp/gp/aw/s/ref=is_box_?i=stripbooks&k={%1}&ie=UTF8&tag=takeharu0516-22',
	'^(.*(?=の))(の)(おもちゃ)$' : 'http://www.amazon.co.jp/gp/aw/s/ref=is_box_?i=toys&k={%1}&ie=UTF8&tag=takeharu0516-22',
	'^(.*(?=の))(の)(ゲーム)$' : 'http://www.amazon.co.jp/gp/aw/s/ref=is_box_?i=videogames&k={%1}&ie=UTF8&tag=takeharu0516-22',
	'^(.*(?=の))(の)(dvd)$' : 'http://www.amazon.co.jp/gp/aw/s/ref=is_box_?i=dvd&k={%1}&ie=UTF8&tag=takeharu0516-22',
	'^(.*(?=の))(の)(地図|マップ)$' : 'http://maps.google.co.jp/maps?hl=ja&q={%1}',
	'^(.*(?=の))(の)(画像|イメージ)$' : 'http://www.google.co.jp/search?tbm=isch&hl=ja&q={%1}',
	'^(.*(?=の|を))(の|を)(翻訳|英語)$' : 'http://translate.google.com/?hl=ja&q={%1}',
	'^(.*(?=で))で(.*(?=の|を|が))(の|を|が)(食べたい|食べる|飲みたい|飲む|お店)$' : 'http://r.tabelog.com/rst/rstsearch/?LstKind=1&voluntary_search=1&sa={%1}&sk={%2}',
	'^(.*(?=の|を|で|が))(の|を|で|が)(食べたい|食べる|飲みたい|飲む|お店)$' : 'http://r.tabelog.com/japan/0/0/lst/?vs=1&sw={%1}',
	'^(.*(?=を|が))(を|が)(買う|欲しい)$' : 'http://hb.afl.rakuten.co.jp/hgc/038b18ea.44de3902.09e0122d.001755b6/?pc=http%3a%2f%2fsearch.rakuten.co.jp%2fsearch%2fspmall%2f{%1}%2f%3fscid%3daf_ich_link_urltxt&m=http%3a%2f%2fm.rakuten.co.jp%2f',
	'^(.*(?=の))(の)(レシピ|献立|作り方)$' : 'http://cookpad.com/%E3%83%AC%E3%82%B7%E3%83%94/{%1}',
	'^(.*(?=の))(の)(動画|ムービー)$' : 'http://www.youtube.com/results?search_query={%1}',
	//'^(.*(?=の|を))(の|を)(ツイート|つぶやく)$' : 'http://twitter.com/home?status={%1}',
	'^(.*(?=から))から(.*(?=までの))までの(路線|行き方)$' : 'http://transit.loco.yahoo.co.jp/search/result?from={%1}&to={%2}',
	'^(.*(?=から))から(.*(?=までの))までの(終電)$' : 'http://transit.loco.yahoo.co.jp/search/result?from={%1}&to={%2}&type=2',
	'^(.*(?=駅の))(駅の)(時刻表)$' : 'http://transit.loco.yahoo.co.jp/station/top?st={%1}',
	'^(.*)(とは|について|を知りたい|を教えて)$' : 'http://dic.search.yahoo.co.jp/#&p={%1}',
	'^(今日の)?(星占い|運勢|占い)$' : 'http://fortune.yahoo.co.jp/12astro/ranking.html',
	'^ニュース$' : 'http://headlines.yahoo.co.jp/hl',
	'^(.*(?=の))(の)(ニュース)$' : 'http://news.search.yahoo.co.jp/search?p={%1}&ei=UTF-8&fr=news_sw',
	'^(.*(?=の))(の)(まとめ)$' : 'http://search.naver.jp/m/matome?q={%1}',
	'^(近く|周辺)の(.*)$' : 'http://maps.google.com/maps?daddr={%2}&saddr=現在地&dirflg=w&t=m',
	//'^(ヘルプ|help)$' : 'http://sirilauncher.com/help.html',
	'^(.*)$' : 'http://www.google.co.jp/search?q={%1}&hl=ja'

};

var commands_en = {
	'^((tweet|twitter)( .*))$' : {'mode':'twitterClient','tweetie':'tweetie://post?message={%3}','echofon':'echofon:///post?{%3}','online':'http://twitter.com/home?status={%3}'},
	'^(facebook)$':'fb://profile',
	'^(ipod|music|play)$':'music:',
	'^(sms)$':'sms:',
	'^(line)$':'LINE://',
	'^(reminder)$':'x-apple-reminder://',
	'^(html)$':'view-source:' + window.location.href,
	'^(help)$' : 'javascript:$("#helpModal").modal("show");',
	'^(map of)(.*)$' : 'http://maps.google.com/maps?q={%2}'
};
