import AformView from './views/aformview';

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