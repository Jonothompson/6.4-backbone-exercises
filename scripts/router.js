//
//Import Views
//

import IndexView from './views/index';
import AformView from './views/aformview';
import BFormView from './views/bPeopleView';
import CPostView from './views/cPostView';
import ShowView from './views/ShowView';
import BookmarkView from './views/bookmarkView';
import BookmarkShow from './views/bookmarkShow';

//
//Import Collections
//

import {BPeopleCollection} from './models/bPeopleForm';
import {BookmarkCollection} from './models/bookmarkModel';

//
//Import Models
//

import {AformCollection} from './models/aformmodel';
import {bookmarkModel} from './models/bookmarkModel';

//
//
//

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'a': 'aform',
		'b': 'bPeopleForm',
		'c': 'cPosts',
		'c/:id': 'postShow',
		'd': 'bookmarks'
	},
	
	initialize: function(){
		this.posts = new AformCollection();
		this.bookmarkshow = new BookmarkCollection();
	},
	
	index: function() {
		var index = new IndexView();
		console.log('index');
		$('#app').html(index.el);	
	},
	
	aform: function() {

		var aformView = new AformView({collection: this.posts});		
		console.log('aForm');
		$('#app').html(aformView.el);	
	},
	
	bPeopleForm: function() {
		var bPeopleCollection = new BPeopleCollection();
		var bPeopleForm = new BFormView({collection: bPeopleCollection});
		console.log('bPeopleForm');
		$('#app').html(bPeopleForm.el);
	},
	
	cPosts: function() {
		var aformCollection = new AformCollection();
		var cPostView = new CPostView({collection: aformCollection});
		aformCollection.fetch();
		console.log('cPostView', aformCollection);
		$('#app').html(cPostView.el);
	},
	
	postShow: function(id) {
		this.posts.fetch().then(function(){
			var post = this.posts.get(id);
			console.log(post);
			var show = new ShowView({model: post});
			$('#app').html(show.el);
		}.bind(this));
	},
	
	bookmarks: function() {
		var bookmarkCollection = new BookmarkCollection();
		var bookmarkView = new BookmarkView({collection: bookmarkCollection});
		bookmarkCollection.fetch();		
		$('#app').html(bookmarkView.el);
	},
	
	bookmarkShow: function(id) {
		this.bookmarkpost.fetch().then(function(){
			var bookmarkpost = this.bookmarkpost.get(id);
			console.log(bookmarkpost);
			var bookmark = new BookmarkShow({model: bookmarkpost});
			$('#app').html(bookmark.el)
		}.bind(this));
	}
	
		
});

var router = new Router();

export default router;