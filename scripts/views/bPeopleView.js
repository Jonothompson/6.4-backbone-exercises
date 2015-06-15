export default Backbone.View.extend({
	template: JST.bpeopletemplate,
	
	events: {
		'click .submit': 'post'
	},
	
	post: function(e) {
		e.preventDefault();
		var firstname = this.$('.firstNameForm').val();
		var lastname = this.$('.lastNameForm').val();
		var address = this.$('.addressForm').val();
		var phonenumber = this.$('.phoneNumberForm').val();
		this.collection.create({
			fistname: firstname,
			lastname: lastname,
			address: address,
			phonenumber: phonenumber,
		}),
		console.log(firstname, lastname, address, phonenumber);
	},
	
	initialize: function(){
		this.render();
		this.listenTo("submit");
	},
	
	render: function(){
		this.$el.html(this.template);
	},
	
	
	
});