import React from 'react';
import { Navbar } from '../navbar/Navbar';
import './meeting.css';

export const MeetingList = ({ meetings }) => {
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
                  <p>Data: {e.scheduledTo}</p>
                </div>
              </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}