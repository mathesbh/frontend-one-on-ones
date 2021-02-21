import React from 'react';
import { Link } from 'react-router-dom'
import './meeting.css'

export const MeetingList = ({ meetings }) => {
  return (
    <>
      <nav className="navbar navbar-dark nav-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="nav">
                <li className="nav-item">
                  <h5 className="nav-link text-light">Encontros</h5>
                </li>
                <li className="nav-item">
                    <Link to="/marcarEncontro" className="btn btn-light">Marcar</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="container">
        <div className="row">
          <div className="col-md-12">
            {meetings.map((m) => (
              <div className="box-meeting mx-auto mt-4">
                <div className="list-meeting text-center pt-2">
                  <h5>Encontro com: {m.memberName}</h5>
                  <p>Data: {m.scheduled}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}