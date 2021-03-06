import axios from 'axios';
import { getHeader } from './header_config.js';

const baseUrl = process.env.REACT_APP_API_URL;

export const signup = (user) => {
  return axios({
    method: 'POST',
    url: `${baseUrl}/api/users`,
    data: { user }
  });
};

export const login = (user) => {
  return axios({
    method: 'POST',
    url: `${baseUrl}/api/session`,
    data: { user }
  })
};

export const logout = () => {
  return axios({
    method: 'DELETE',
    url: `${baseUrl}/api/session`,
    headers: getHeader()
  })
};

export const reset = (email) => {
  return axios({
    method: 'POST',
    url: `${baseUrl}/api/users/reset_password`,
    data: { email }
  })
}

export const updatePassword = (user) => {
  return axios({
    method: 'PATCH',
    url: `${baseUrl}/api/users/0`,
    data: { user }
  });
}
