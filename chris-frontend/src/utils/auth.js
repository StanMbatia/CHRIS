import {jwtDecode} from 'jwt-decode';

export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

export const getUser = () => {
  const token = localStorage.getItem('token');
  return token ? jwtDecode(token) : null;
};
