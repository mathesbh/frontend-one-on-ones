import React from 'react';
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

  const handleDelete = async (id) => {
    await api.delete(`meetings/${id}`);
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
          <button onClick={() => actionConcludes(meeting._id)} className="btn btn-success">Concluir <i className="far fa-check-square"></i></button>
          <button className="btn btn-primary">Editar <i className="far fa-edit"></i></button>
          <button onClick={() => handleDelete(meeting._id)} className="btn btn-danger">Deletar <i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    </div>
  )
}