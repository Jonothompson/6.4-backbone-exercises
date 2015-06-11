import aformView from './views/aformview';

var Router = Backbone.Router.extend({
	routes: {
		'': 'aform'
	},
	
	aform: function(){
		var view = new aformView({});
		$('#app').html(view.el);
	}
	
});