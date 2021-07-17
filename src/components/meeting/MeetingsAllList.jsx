import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { MeetingsAllItem } from './MeetingsAllItem';
import { useMeetings } from '../hooks/useMeetingsAll';
import { useUsers } from '../hooks/useUsers';

export const MeetingsAllList = () => {
  const meetings = useMeetings();
  const users = useUsers();

  const handleNameUser = (id) => {
    const user = users.filter(u => u._id === id);
    return user[0].name;
  };

  return(
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {meetings.map(m => (
              <div key={m._id}>
                <MeetingsAllItem meeting={m} handleName={handleNameUser}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}