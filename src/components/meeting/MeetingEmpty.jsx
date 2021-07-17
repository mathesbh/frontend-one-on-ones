import React from 'react';

export default function MeetingEmpty() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="alert alert-info mt-3" role="alert">
            Nenhum encontro agendado!!!
          </div>
        </div>
      </div>
    </div>
  )
}