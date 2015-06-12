import IndexView from './views/index';
import AformView from './views/aformview';


import {AformCollection} from './models/aformmodel';

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'a': 'aform'
	},
	
	initialize: function(){
		var aformCollection = new AformCollection();
		this.aformView = new AformView({collection: aformCollection});
	},
	
	index: function() {
		var index = new IndexView();
		console.log('index');
		$('#app').html(index.el);	
	},
	
	aform: function() {
		console.log('aForm');
		$('#app').html(this.aformView.el);	
	},
	
});

var router = new Router();

export default router;