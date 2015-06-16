var AformModel = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: function() {
		return {	
		title: '',
		body: '',
		created_at: new Date()
		};
	},
});

var AformCollection = Backbone.Collection.extend({
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/aformposts',
	model: AformModel
});

export default {AformModel, AformCollection};