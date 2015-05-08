// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<button class="enqueue"></button><td class="play">(<%= artist %>)</td><td class="play"><%= title %></td>'),

  events: {
    'click .play': function() {
      this.model.play();
      this.model.enqueue();
    },
    'click .enqueue': function() {
      console.log("LibraryEntryView this.model=", this.model)
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
