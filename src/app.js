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
    event.preventDefault();
    const valid = validate();
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
    return { error: true, message: error };
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

function validate() {
  const response = {};

  // username validation
  const username = document.getElementById('input-username');
  if (username.checkValidity()) {
    response.username = username.value;
  } else {
    //username.reportValidity();
    response.error = true;
    response.errorMessage = `- USERNAME can't be empty`;
  }

  // password validation
  const password = document.getElementById('input-password');
  if (password.checkValidity()) {
    response.password = password.value;
  } else {
    //password.reportValidity();
    const message = `- PASSWORD can't be empty`
    if (response.error) {
      response.errorMessage += '<br>' + message;
    } else {
      response.error = true;
      response.errorMessage = message;
    }
  }
  return response;
}