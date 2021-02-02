import { route } from './router';
import { redirect, login, logout, isAuthorized, validate } from './methods';
import './styles/style.scss';
import './styles/pages.scss';
import './styles/form.scss';
import './styles/buttons.scss';

route('/', 'home.ejs', function () {
  this.errorMessage = null;
  this.username = localStorage.getItem('username');

  this.$on('.login-button', 'click', async () => {
    event.preventDefault();
    const valid = validate();
    // setting the response depending on validation and server response result
    const response = !valid.error ? await login({ username: valid.username, password: valid.password }) : undefined;
    if (response && !response.error) {
      localStorage.setItem('username', valid.username);
      localStorage.setItem('token', response.token);
      redirect('/success');
    } else {
      this.errorMessage = valid.error ? valid.errorMessage : response.message;
      this.$refresh();
    }
  });

  this.$on('.logout-button', 'click', () => {
    this.username = null;
    logout();
    this.$refresh();
  });
});

route('/success', 'success.ejs', function () {
  this.username = null;
  if (!isAuthorized()) {
    redirect('/unauthorized');
    return;
  }
  this.username = localStorage.getItem('username');
  this.$on('.logout-button', 'click', () => {
    logout();
    redirect('/');
  });
});

route('/unauthorized', 'unauthorized.ejs', function () { });

route('/about', 'about.ejs', function () { });

route('*', '404.ejs', function () { });