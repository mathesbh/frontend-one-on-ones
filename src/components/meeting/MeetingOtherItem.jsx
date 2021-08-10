import React from 'react';
import { Schedule } from '../date/Schedule';


export const MeetingOtherItem = ({ user }) => {

  return (
    <>
      {user.map(u => (
        <div className="card m-2 text-center" key={u.id}>
          <h5 className="card-header">Encontro agendado por:</h5>
          <div className={u.completed ? 'card-body card_conclude' : 'card-body'}>
            <h5 className="card-title">{u.assignedTo.name}</h5>
            <Schedule schedule={u.scheduledTo} text="card-text" /> 
          </div>
          <div className="card-footer">
            <div className="btn-group" role="group" aria-label="Encontro">
              <h6>Com: {u.name}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}