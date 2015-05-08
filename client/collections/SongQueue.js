// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
   // this.set('songs', this)
   // this.on('add', this.enqueue, this);
   // this.on('dequeue', this.enqueue, this);
   // this.on('remove', this.enqueue, this);

  },

  enqueue: function(song){
    //this.at = 0;
    this.add(song);
  }

});