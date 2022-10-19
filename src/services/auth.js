import axios from 'axios';
import { getDomain } from './domain';

export function login(email, password) {
  const domain = getDomain();

  return axios.post(
    `${process.env.REACT_APP_API_PROTOCOL}${domain}.${process.env.REACT_APP_API_URL}/login`,
    { email, password },
    { Accept: 'application/json' }
  );
}

// eslint-disable-next-line camelcase
export function register(name, email, domain, password, password_confirmation) {
  return axios.post(
    `${process.env.REACT_APP_API_PROTOCOL}${process.env.REACT_APP_API_URL}/register`,
    {
      name,
      email,
      domain,
      password,
      // eslint-disable-next-line camelcase
      password_confirmation,
    },
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
}
