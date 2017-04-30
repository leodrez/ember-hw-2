import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  
  pic() {
    return faker.image.avatar();
  }
});
