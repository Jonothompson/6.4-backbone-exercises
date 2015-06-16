var bookmarkModel = Backbone.Model.extend({
	idAttribure: '_id',
	defaults: function() {
		return {
			title: '',
			url: '',
			tag: '',
			created_at: new Date()
		};	
	},
});

var BookmarkCollection = Backbone.Collection.extend({
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/jt-bookmarks',
	model: bookmarkModel
});

export default {bookmarkModel, BookmarkCollection};