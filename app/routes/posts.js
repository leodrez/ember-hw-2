import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return  [
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
    ]
  }
});
