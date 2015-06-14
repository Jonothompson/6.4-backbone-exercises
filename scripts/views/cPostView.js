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
		this.$el.html(this.template);
	},
	
//	togglePost: function(e){
//		e && e.preventDefault();
//		this.model.set('isHidden', !this.model.get('isHidden'));
//	},
	
//	posts: function(){
//		console.log('posting?');
//	},
	
});