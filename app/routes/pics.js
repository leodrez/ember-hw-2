import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('https://www.reddit.com/r/pics.json')
      .then ((res) => {
        return res.data.children
    });
  }
});
