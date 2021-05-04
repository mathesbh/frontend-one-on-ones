import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../services/auth';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
    <Link to="/encontros" className="navbar-brand">One on One's</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/encontros">Encontros</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/marcarEncontro">Agendar</Link>
        </li>
        <li className="nav-item">
          <Link onClick={logout} className="nav-link" to="/">Sair</Link>
        </li>
      </ul>
    </div>
  </nav>
)