import Ember from 'ember';

export default Ember.Controller.extend({
  btnStat: true,

  actions: {
    orderPics() {
      this.toggleProperty('btnStat');
    } 
  }
});
