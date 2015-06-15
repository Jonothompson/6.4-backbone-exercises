export default Backbone.View.extend({
	template: JST.ShowViewTemplate,
	
	initialize: function (){
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	},
	
	posts: function(){
		console.log('posting?');
	},
	
});