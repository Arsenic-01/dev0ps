import { useContext } from 'react';
import { AuthContext } from './authContext';

const useAuth = function () {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
