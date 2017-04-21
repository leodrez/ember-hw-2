import Ember from 'ember';

export default Ember.Service.extend({
  getPostById(id) {
    const posts = this.getPosts();
    return posts.findBy('id', id);
  },

  getPosts() {
    return [ 
      {
        id: '1',
        title: 'First',
        body: 'Test one'
      },
      {
        id: '2',
        title: 'Second',
        body: 'Test two'
      },
      {
        id: '3',
        title: 'Third',
        body: 'Test three'
      }
    ];
  }
});
