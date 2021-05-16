import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './meeting.css';
import ptBR from 'date-fns/locale/pt-BR';
import { format, parseISO } from 'date-fns';

export const MeetingList = ({ meetings }) => {
  const handleScheduled = (scheduled) => {
    const date = parseISO(scheduled)
    const formattedDate = format(date, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {locale: ptBR});
    return formattedDate;
  }

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            {meetings.map(e => (
              <div className="box-meeting mx-auto mt-4">
                <div className="list-meeting text-center pt-2">
                <h5>Encontro com: {e.meetWith.name}</h5>
                  <p>{handleScheduled(e.scheduledTo)}</p>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}