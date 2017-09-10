(function(){
	chrome.storage.sync.get('setting', function(data) {
		if (data != null && data.setting != 0) {
			function work() {
				translateBody(document.body, data.setting);	
			}
			work();
			setInterval(work, 3000);
		}
	});  
})();
