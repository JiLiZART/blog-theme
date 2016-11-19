import $ from 'jquery';

class CommentsList {
	constructor($el) {
		$el.on('focus', '.comments__feed-button', this.onFeedButtonFocus);
	}

	onFeedButtonFocus(e) {
		$(e.target).popover({
			container: '.comments__feed-body'
		});
	}
}

export default CommentsList;
