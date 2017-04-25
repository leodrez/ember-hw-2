import { test } from 'qunit';
import moduleForAcceptance from 'ember-hw-r/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | posts');

test('visiting /posts', function(assert) {
  visit('/posts');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
  });
});

test("I can view the posts", function() {
  let posts = server.createList('post', 3);

  visit('/posts');

  andThen(() => {
    equal(find('li').length, 3);
    equal(find('li:first').text(), posts[0].name);
  });
});
