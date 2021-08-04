import React from 'react';
import { Navbar } from '../navbar/Navbar';
import { MeetingsAllItem } from './MeetingsAllItem';
import { useMeetings } from '../hooks/useMeetingsAll';
import { useUsers } from '../hooks/useUsers';
import MeetingEmpty from '../meeting/MeetingEmpty';

export const MeetingsAllList = () => {
  const meetings = useMeetings();
  const users = useUsers();

  const handleNameUser = (id) => {
    const { name } = users.find(u => u._id === id);
    return name;
  };

  return(
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            {meetings.length < 0 ? <MeetingEmpty /> : meetings.map(m => (
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