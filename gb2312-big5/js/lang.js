function getChromeVersion() {     
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	return raw ? parseInt(raw[2], 10) : false;
}

var manifest = chrome.runtime.getManifest();
var app_name = manifest.name + " v" + manifest.version;

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('msg').innerHTML = 'App: ' + app_name;
	$('select#setting').change(function() {
		chrome.storage.sync.set({ setting: document.getElementById("setting").selectedIndex });
	});   
	chrome.storage.sync.get('setting', function(data) {
		document.getElementById("setting").selectedIndex = data.setting;  
	});  
 }, false);