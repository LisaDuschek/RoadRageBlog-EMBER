import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    update(comment,params) {
     this.sendAction('update', comment, params);
   },
    saveComment() {
      var params = {
        username: this.get('username'),
        content: this.get('content'),
        article: this.get('model')
      }
      this.set('addNewComment', false),
      this.sendAction('saveComment', params);
    }
  }
});
