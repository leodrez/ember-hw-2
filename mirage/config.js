export default function() {

  this.namespace = 'api/v1';

  this.get('/posts');
  this.get('/posts/:id');
  this.get('/pics');

  this.get('/posts/:id', function (db, request) {
    return { data: posts.find((post) => request.params.id === post.id) };
  });

}
