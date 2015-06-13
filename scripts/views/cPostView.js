export default Backbone.View.extend({
	template: JST.cPostsTemplate,
	
	event: {
		'click .submit': 'posts'
	},
	
	initialize: function (){
		this.render();
		this.listenTo(this.collection, 'update', this.render);
	},
	
	render: function(){
		this.$el.html(this.template(this.collection.toJSON()));
	},
	
	posts: function(){
		console.log('posting?');
	},
	
});