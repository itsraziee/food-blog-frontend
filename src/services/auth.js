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
