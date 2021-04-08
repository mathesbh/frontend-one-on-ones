import React, { useState, useEffect} from 'react';
import api from '../../services/api';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const { data: { users } } = await api.get('users');

    setUsers(users);
  }

  useEffect(() => {
    getUser();
  }, []);

  return users;
}