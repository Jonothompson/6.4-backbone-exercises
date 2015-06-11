export default Backbone.View.extend({
	template: JST.aformtemplate,
	
	initialize: function(){
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template());
	},
	
});