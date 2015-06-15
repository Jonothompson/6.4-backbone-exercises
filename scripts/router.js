//
//Import Views
//

import IndexView from './views/index';
import AformView from './views/aformview';
import BFormView from './views/bPeopleView';
import CPostView from './views/cPostView';

//
//Import Collections
//

import {BPeopleCollection} from './models/bPeopleForm';

//
//Import Models
//

import {AformCollection} from './models/aformmodel';

//
//
//

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'a': 'aform',
		'b': 'bPeopleForm',
		'c': 'cPosts',
	},
	
	initialize: function(){
	},
	
	index: function() {
		var index = new IndexView();
		console.log('index');
		$('#app').html(index.el);	
	},
	
	aform: function() {
		var aformCollection = new AformCollection();
		var aformView = new AformView({collection: aformCollection});		
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
	
	
	
});

var router = new Router();

export default router;