import IndexView from './views/index';
import AformView from './views/aformview';
import BFormView from './views/bPeopleView';


import {AformCollection} from './models/aformmodel';
import {BPeopleCollection} from './models/bPeopleForm';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'a': 'aform',
		'b': 'bPeopleForm'
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
	
});

var router = new Router();

export default router;