import { route } from './router';
import './styles/style.scss';
import './styles/pages.scss';
import './styles/form.scss';
import './styles/buttons.scss';

const apiUrl = "https://zwzt-zadanie.netlify.app/api/login";

route('/', 'home.ejs', function () {
  this.errorMessage = null;
  this.username = localStorage.getItem('username');
  this.$on('.login-button', 'click', async () => {
    const username = document.getElementById('input-username').value;
    const password = document.getElementById('input-password').value;
    const response = await login({ username: username, password: password });
    if (!response.error) {
      localStorage.setItem('username', username);
      localStorage.setItem('token', response.token);
      redirect('/success');
    } else {
      this.errorMessage = response.message;
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
  this.username = localStorage.getItem('username');;
  this.$on('.logout-button', 'click', () => {
    logout();
    redirect('/');
  });
});

route('/unauthorized', 'unauthorized.ejs', function () { });

route('/about', 'about.ejs', function () { });

route('*', '404.ejs', function () { });

function redirect(path) {
  window.location.hash = '#' + path;
}

async function login(data = {}) {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  } catch (error) {
    return {error: true, message: error};
  }
}

function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
}

function isAuthorized() {
  // this is not safe solution
  // token should be validated on the server
  return !!localStorage.getItem('token');
}

function validator() {

}