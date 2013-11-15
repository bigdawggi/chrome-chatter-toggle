chatterHider = {
	showHidePageAction : function(tabId, changeInfo, tab) {
		if (chatterHider.isCrowdfaveOrg(tab)) {
			chatterHider.showPageAction(tabId);
		}
		else {
			chatterHider.hidePageAction(tabId);
		}
	},
	isCrowdfaveOrg : function(tab) {
		return (tab.url.indexOf('https://crowdfave.org') > -1);
	},
	showPageAction : function(tabId) {
		chrome.pageAction.show(tabId);
	},
	hidePageAction : function(tabId) {
		chrome.pageAction.hide(tabId);
	}
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(chatterHider.showHidePageAction);

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(
		null,
		{
			file : "content-script.js"
		}
	);
});
