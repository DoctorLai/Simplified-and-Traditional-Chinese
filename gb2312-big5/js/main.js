
function getChromeVersion() {     
	var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
	return raw ? parseInt(raw[2], 10) : false;
}

var manifest = chrome.runtime.getManifest();
var app_name = manifest.name + " v" + manifest.version;

document.addEventListener('DOMContentLoaded', function() {
    $(function() {   
        $( "#tabs" ).tabs();
    });
    const about = $('textarea#about');
    about.html('App: ' + app_name + '\nChrome Version: ' + getChromeVersion() + "\n");
    const blist = $('textarea#blist');
    $('textarea#blist').change(function() {
        chrome.storage.sync.set({ blist: document.getElementById("blist").value });
    });
    $('select#setting').change(function() {
        chrome.storage.sync.set({ setting: document.getElementById("setting").selectedIndex });
    });  
    $('select#dialect').change(function() {
        chrome.storage.sync.set({ dialect: document.getElementById("dialect").selectedIndex });
    });        
    chrome.storage.sync.get('setting', function(data) {
        if (!data || (!data.setting) || (typeof data.setting === "undefined")) {
            data.setting = 0;
        }
        document.getElementById("setting").selectedIndex = data.setting;  
    });
    chrome.storage.sync.get('dialect', function(data) {
        if (!data || (!data.dialect) || (typeof data.dialect === "undefined")) {
            data.dialect = 0;
        }
        document.getElementById("dialect").selectedIndex = data.dialect;  
    });
    chrome.storage.sync.get('blist', function(data) {
        if (!data || (!data.blist) || (typeof data.blist === "undefined")) {
            data.blist = "";
        }        
        document.getElementById("blist").value = data.blist;
    });  
}, false);
