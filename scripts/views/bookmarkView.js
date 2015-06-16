export default Backbone.View.extend({
	template: JST.bookmarkTemp,
  
  events: {
		'click .submit': 'save'
	},
	
  save: function(e) {
    e.preventDefault();
    var title = this.$('.Bookmark-Title-Form').val();
    var url = this.$('.Bookmark-URL-Form').val();
    var tag = this.$('.Bookmark-tag-form').val();
    this.collection.create({
      title: title,
      url: url,
      tag: tag,
    }), 
    console.log(title, url, tag);
  },
  
	  initialize: function(){
    this.render();
		this.listenTo(this.collection, 'update', this.render);
  },

  render: function(){
		this.$el.html(this.template(this.collection.toJSON()));
  }
	
});