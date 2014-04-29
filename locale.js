app

.config(["$translateProvider", function($translateProvider) {

	$translateProvider
	.translations("zh_tw", {
		"OK": "確定",
		"Cancel": "取消",
		"Add": "新增",
		"Autoplay": "自動播放",
		"Add a stream source": "新增串流",
		"Name": "名稱",
		"URL": "網址",
		"Embed URL": "嵌入網址"
	});

	var defTrans = {};
	angular.forEach($translateProvider.translations("zh_tw"), function(v, key) {
		if (key.match(/{{.*}}/)) {
			defTrans[key] = key;
		}
	});
	$translateProvider
	.translations("en", defTrans)
	.registerAvailableLanguageKeys(["en", "zh_tw"], {
		"en_us": "en",
		"en_uk": "en",
		"zh_cn": "zh_tw",
		"zh_hk": "zh_tw"
	})
	.useStorage("localStorageService")
	.determinePreferredLanguage();

}])

;
