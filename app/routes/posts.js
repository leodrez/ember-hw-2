import Ember from 'ember';
import Data from '../lib/data';

export default Ember.Route.extend({
  model() {
    return Data
  }
});
