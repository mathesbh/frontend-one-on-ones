import React from 'react';
import { Btn } from '../button/Btn';
import { Schedule } from '../date/Schedule';
import api from '../../services/api';


export const MeetingBox = ({ meeting }) => {
  
  const handleConclude = () => {
    return meeting.completed ? 'card-body bg-success text-light' : 'card-body';
  }

  const actionConcludes = async(id) => {
    await api.put(`meetings/${id}`, { completed: true });
    return window.location.reload();
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
          <Btn concluir={actionConcludes} id={meeting._id} btn="btn btn-success" name="Concluir" ico="fa-check-square"/>
          <Btn id={meeting._id} btn="btn btn-primary" name="Editar" ico="fa-edit"/>
          <Btn id={meeting._id} btn="btn btn-danger" name="Excluir" ico="fa-trash-alt"/>
        </div>
      </div>
    </div>
  )
}