import React, { useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import { useUsers } from '../hooks/useUsers';

export default function MeetingCreate() {
  const users = useUsers();

  const [user, setUser] = useState({
    name: '',
    id: '',
  });

  const handleLeaderTypes = (type) => type === 'leader' ? 'Líder' : 'Liderado';
  
  const handleSetUser = (name, id) => {
    return setUser({ name, id });
  }

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
                      <button onClick={(name) => handleSetUser(name.target.innerText, u._id)} className="dropdown-item">{u.name} - {handleLeaderTypes(u.leaderTypes)}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="box-meeting mx-auto mt-4">
              <div className="list-meeting text-center pt-2">
                <div className="btn-group pt-2">
                  <h5 className="pt-2">{user.name}</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}