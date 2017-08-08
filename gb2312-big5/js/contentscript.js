(function(){
	chrome.storage.sync.get('setting', function(data) {
		if (data.setting != 0) {
			translateBody(document.body, data.setting);
		}
	});  
})();
