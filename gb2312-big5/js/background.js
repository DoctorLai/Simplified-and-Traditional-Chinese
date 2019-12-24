(function() {
    "use strict";
    
    if (chrome && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
            switch (message.type) {
                case "bglog":
                    console.log(message.obj);
                break;
            }
            return true;
        });
    }

    if (chrome && chrome.runtime && chrome.runtime.onInstalled) {
        chrome.runtime.onInstalled.addListener(function(details) {
            if (details.reason == "install") {
                //call a function to handle a first install
                console.log("onInstalled: Thank you!");
            } else if (details.reason == "update") {
                //call a function to handle an update
                console.log("new version available");
            }
        });
    }
})();