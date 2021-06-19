import React from 'react';
import { Schedule } from '../date/Schedule';
import ModalConclude from '../modal/ModalConclude';
import ModalDelete from '../modal/ModalDelete';


export const MeetingBox = ({ meeting }) => {
  
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
          <ModalConclude buttonLabel={'Concluir'} id={meeting._id}/>
          <ModalDelete buttonLabel={'Deletar'} id={meeting._id}/>
        </div>
      </div>
    </div>
  )
}