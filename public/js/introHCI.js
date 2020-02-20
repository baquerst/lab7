'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

function clickLike(e) {
	e.preventDefault();
	ga("send", "event", 'like', 'click');
}


/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.likeBtn').click(clickLike);
}