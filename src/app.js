import { route } from './router';

route('/', 'home.ejs', function() {
  this.where = 'here';
});

route('/success', 'test/example1.ejs', function() {
  //this.title = 'Example 1';
});

route('/about', 'about.ejs', function() {});

route('*', '404.ejs', function () {});
