//The code that is fired upon page load
//to check your plugin js is working uncomment the next line.
chrome.browserAction.onClicked.addListener(function(activeTab) {
	chrome.tabs.executeScript(null, {file: "jquery.js"});
	chrome.tabs.executeScript(null, {file: "handsOnTable.js"});
    chrome.tabs.executeScript(null, {file: "content.js"});
});
