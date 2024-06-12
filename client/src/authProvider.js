// authProvider.js
import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';

const authProvider = (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    // Replace this with your actual authentication logic
    const isValidCredentials = username === 'admin' && password === 'admin';
    if (isValidCredentials) {
      localStorage.setItem('username', username);
      return Promise.resolve();
    }
    return Promise.reject('Invalid username or password');
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem('username');
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject('Unknown method');
};

export default authProvider;
