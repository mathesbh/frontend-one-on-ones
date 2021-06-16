import React from 'react';

export const Btn = ({ btn, name, ico, id, concluir }) => {

  return (
    <button onClick={() => concluir(id)} type="button" className={btn}>{name} <i className={`far ${ico}`}></i></button>
  );
}