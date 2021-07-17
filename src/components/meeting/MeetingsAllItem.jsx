import React from 'react';
import { Schedule } from '../date/Schedule';


export const MeetingsAllItem = ({ meeting, handleName }) => {
  
  const handleConclude = () => {
    return meeting.completed ? 'card-body card_conclude' : 'card-body';
  }

  return (
    <div className="card m-2 text-center">
      <h5 className="card-header">Detalhes do encontro</h5>
      <div className={handleConclude()}>
        <h5 className="card-title">{meeting.meetWith.name}</h5>
        <Schedule schedule={meeting.scheduledTo} text="card-text"/>
      </div>
      <div className="card-footer">
        <div className="btn-group" role="group" aria-label="Encontro">
          <h6>Quem agendou o encontro: {handleName(meeting.assignedTo)}</h6>
        </div>
      </div>
    </div>
  )
}