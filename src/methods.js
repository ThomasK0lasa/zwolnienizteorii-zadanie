const apiUrl = "https://zwzt-zadanie.netlify.app/api/login";

export function redirect(path) {
  window.location.hash = '#' + path;
}

export async function login(data) {
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

export function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('token');
}

export function isAuthorized() {
  // this is not safe solution
  // token should be validated on the server
  return !!localStorage.getItem('token');
}

export function validate() {
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