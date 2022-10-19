import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthRequired({ children }) {
  const navigate = useNavigate();
  const userToken = Cookies.get('userToken');
  console.log(userToken);

  useEffect(() => {
    if (!userToken) {
      navigate(`/page/login`);
    }
  }, []);

  return children;
}
