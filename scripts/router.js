import AformView from './views/aformview';

import {AformCollection} from './models/aformmodel';

var Router = Backbone.Router.extend({
	routes: {
		'': 'aform'
	},
	
	initialize: function(){
		 var aformCollection = new AformCollection();
		this.aformView = new AformView({collection: aformCollection});
	},
	
	aform: function() {
		$('#app').html(this.aformView.el);	
	},
	
});

var router = new Router();

export default router;