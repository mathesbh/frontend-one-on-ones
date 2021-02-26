import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Navbar } from '../navbar/Navbar';

export default function MeetingCreate() {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const { data: { users } } = await api.get('/users');

    setUsers(users);
  }

  useEffect(() => {
    getUser();
  }, []);

  const handleLeaderTypes = (type) => type === 'leader' ? 'Líder' : 'Liderado';

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-meeting mx-auto mt-4">
              <div className="list-meeting text-center pt-2">
                <div className="btn-group pt-2">
                  <button type="button" className="btn btn-light">Agendar encontro com </button>
                  <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Menu</span>
                  </button>
                  <div className="dropdown-menu">
                    {users.map((u) => (
                      <button className="dropdown-item">{u.name} | {handleLeaderTypes(u.leaderTypes)}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 