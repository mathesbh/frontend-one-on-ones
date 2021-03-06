import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import api from '../../services/api';
import './login.css';
import imageMobile from './img/mobile.png';
import imageDesk from './img/desk.png'


class SignUp extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        leaderTypes:'',
    };

    handleSignUp = async e => {
        e.preventDefault();
        
        const { name, email, password, leaderTypes } = this.state;

        await api.post('/auth/signup', { name, email, password, leaderTypes });

        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="image_desk mt-5">
                            <img className="img-fluid mt-5" src={imageDesk} alt="Duas pessoas reunidas" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                        <main className="box d-flex flex-column justify-content-center align-items-center">
                            <h1 className="mb-4">One on One's</h1>
                            <form onSubmit={this.handleSignUp}>
                                <div className="form-group">
                                    <input onChange={e => this.setState({ name: e.target.value })} className="form-control" name="name" type="text" placeholder="Digite seu nome..." required />
                                </div>
                                <div className="form-group">
                                    <input onChange={e => this.setState({ email: e.target.value })} className="form-control" name="email" type="email" placeholder="Digite seu email..." required />
                                </div>
                                <div className="form-group">
                                    <input onChange={e => this.setState({ password: e.target.value })} type="password" name="password" className="form-control" placeholder="Digite sua senha..." required />
                                </div>
                                <div className="form-check form-check-inline ml-2">
                                    <input type="radio" className="form-check-input" name="leaderTypes" value="leader" checked={this.state.leaderTypes === 'leader'} onChange={e => this.setState({ leaderTypes: e.target.value })} required/>
                                    <label htmlFor="leader" className="form-check-label">Líder</label>
                                </div>
                                <div className="form-check form-check-inline float-right">
                                    <input type="radio" className="form-check-input" name="leaderTypes" value="collaborator" checked={this.state.leaderTypes === 'collaborator'} onChange={e => this.setState({ leaderTypes: e.target.value })} required/>
                                    <label htmlFor="leader" className="form-check-label">Liderado</label>
                                </div>
                                <div className="btn-login d-flex justify-content-between mt-3">
                                    <button type="submit" className="btn btn-ative">Cadastrar</button>
                                    <Link className="btn btn-light" to="/">Entrar</Link>
                                </div>
                            </form>
                        </main>
                        <div className="image_mobile mt-5">
                            <img className="img-fluid" src={imageMobile} alt="Duas pessoas reunidas" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}




export default withRouter(SignUp);