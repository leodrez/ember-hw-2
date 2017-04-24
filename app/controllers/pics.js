import Ember from 'ember';

export default Ember.Controller.extend({
  btnStat: true,

  sortedOrder: Ember.computed('btnStat', function() {
    const sorted = this.get('model').sort(sorter);
    if (this.get('btnStat')) {
      return sorted; 
    } else {
      return sorted.reverse(); 
    }
  }),

  actions: {
    orderPics() {
      this.toggleProperty('btnStat');
    } 
  }
});




  function sorter(a, b) {
    let nameA = a.data.title.toUpperCase();
    let nameB = b.data.title.toUpperCase();
    if (nameA < nameB) {
      return -1; 
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
