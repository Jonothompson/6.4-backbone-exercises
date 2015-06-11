import AformView from './views/aformview';
//import AformModel from './models/aformmodel';
//
//import {aformCollection} from './models/aformmodel';

var Router = Backbone.Router.extend({
	routes: {
		'': 'aform'
	},
	
	initialize: function(){
		this.aformView = new AformView();
		$('#app').html(this.aformView.el);
	},
	
});

var router = new Router();

export default router;