chatterHider = {
	toggleChatter : function() {
		if (chatterHider.chatterBoxIsVisible()) {
			chatterHider.hideChatterbox();
		}
		else {
			chatterHider.showChatterbox();
		}
	},
	getChatterbox : function() {
		var chatterbox = document.getElementById('chatter-wrapper');
		return chatterbox;
	},
	chatterBoxIsVisible : function() {
		var chatterbox  = chatterHider.getChatterbox();
		return !(chatterbox.style.visibility === 'hidden');
	},
	showChatterbox : function() {
		var chatterbox = chatterHider.getChatterbox();
		chatterbox.style.visibility = "visible";
	},
	hideChatterbox : function() {
		var chatterbox = chatterHider.getChatterbox();
		chatterbox.style.visibility = "hidden";
	}
}
chatterHider.toggleChatter();
