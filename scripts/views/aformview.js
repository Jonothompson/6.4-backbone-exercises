export default Backbone.View.extend({
	template: JST.aformtemplate,
	
	events: {
		'submit .post-form': 'post'
	},
	
	post: function(e) {
		e.preventDefault();
		var title = this.$('.titleForm').val();
		var body = this.$('.bodyForm').val();
		this.collection.create({
			title: title,
			body: body,
		}),
		console.log(title, body);
	},
	
	initialize: function(){
		this.render();
		this.listenTo("submit");
	},
	
	render: function(){
		this.$el.html(this.template());
	},
	
	
	
});