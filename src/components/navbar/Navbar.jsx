import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
    <Link to="/encontros" className="navbar-brand">One on One's</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/marcarEncontro">Agendar </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/encontroCom">Encontro com</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/agendadoPor">Agendado por</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/todosEncontros">Todos os Encontros</Link>
        </li>
        <li className="nav-item">
          <Link onClick={logout} className="nav-link" to="/">Sair</Link>
        </li>
      </ul>
    </div>
  </nav>
)