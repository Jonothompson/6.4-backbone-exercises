export default Backbone.View.extend({
	template: JST.bookmarkShow,
	
	initialize: function (){
		this.render();
	},
	
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	},
	
});