import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './meeting.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';
import api from '../../services/api';

export const MeetingList = ({ meetings }) => {
 
  const handleMeeting = () =>{
    if(meetings == '')
    return(
      <div className="alert alert-dark mt-5" role="alert">
        <p className="text-center mt-2">Nenhum encontro agendado!</p>
      </div>
    )
  }

  const handleConclude = async(id) => {
    await api.put(`meetings/${id}`, { completed: true });
    return window.location.reload();
  }

  const handleCompleted = (completed) => {
    if(completed)
    return (
      <p class="card-text text-success">Encontro concluído</p>
    )
  }
  
  const handleDelete = async (id) => {
    await api.delete(`meetings/${id}`);
    return window.location.reload();
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  const handleScheduled = (scheduled) => {
    const date = parseISO(scheduled)
    const formattedDate = format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR });
    return formattedDate;
  }

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="row">
          <div className="col-sm-12">
            {handleMeeting()}
            {meetings.map(m => (
              <div key={m._id} className="card m-2 text-center">
              <h5 className="card-header">Detalhes do encontro</h5>
              <div className="card-body">
                <h5 className="card-title">{m.meetWith.name}</h5>
                <p className="card-text">{handleScheduled(m.scheduledTo)}</p>
                {handleCompleted(m.completed)}
              </div>
              <div className="card-footer">
                <div className="btn-group" role="group" aria-label="Encontro">
                  <button onClick={() => handleConclude(m._id)} type="button" className="btn btn-success">Concluir <i className="far fa-check-square"></i></button>
                  <button onClick={() => handleEdit(m._id)} type="button" className="btn btn-primary">Editar <i className="far fa-edit"></i></button>
                  <button onClick={() => handleDelete(m._id)} type="button" className="btn btn-danger">Excluir <i className="far fa-trash-alt"></i></button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}