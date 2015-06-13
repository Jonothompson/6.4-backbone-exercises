var bPeopleModel = Backbone.Model.extend({
	defaults: function() {
		return {	
		firstname: '',
		lastname: '',
		address: '',
		phonenumber: '',
		created_at: new Date()
		}
	},
});

var BPeopleCollection = Backbone.Collection.extend({
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/bpeopleposts',
	model: bPeopleModel
});

export default {bPeopleModel, BPeopleCollection};