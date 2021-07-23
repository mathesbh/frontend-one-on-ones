import { useState, useEffect} from 'react';
import api from '../../services/api';

export const useUsers = () => {
  const [stateUsers, stateSetUsers] = useState([]);

  const getUser = async () => {
    const { data: { users } } = await api.get('users');
    stateSetUsers(users);
  }

  useEffect(() => {
    getUser();
  }, []);

  return stateUsers;
}