import { route } from './router';
import './styles/style.scss';
import './styles/pages.scss';
import './styles/form.scss';
import './styles/buttons.scss';

let username = null;

route('/', 'home.ejs', function() {
  this.errorMessage = null;
  this.username = username;
  this.$on('.login-button', 'click', () => {
    event.preventDefault();
    username = document.getElementById('input-username').value;
    console.log(document.getElementById('input-password').value);
    redirect('/success');
    /*this.errorMessage = 'Error!';
    this.$refresh();*/
  });
});

route('/success', 'success.ejs', function() {
  if (!username) {
    redirect('/unauthorized');
    return;
  }
  this.username = username;
  this.$on('.logout-button', 'click', () => {
    username = null;
    redirect('/');
  });
});

route('/unauthorized', 'unauthorized.ejs', function() {});

route('/about', 'about.ejs', function() {});

route('*', '404.ejs', function () {});

function redirect(path) {
  window.location.hash = '#'+path;
}