export default Backbone.View.extend({
	template: JST.cPostShowTemplate,
	
	initialize: function(){
		this.render();	
	},
	
	render: function(){
		this.$el.html(this.template);
	},
});