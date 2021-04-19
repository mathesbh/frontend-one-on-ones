import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import api from '../../services/api';
import { login, user } from '../../services/auth';
import './login.css';
import imageMobile from './img/mobile.png';
import imageDesk from './img/desk.png'


class SignIn extends Component {

    state ={
        email: '',
        password: '',
    };

    handleSignIn = async e => {
        e.preventDefault();
        
        const { email, password } = this.state;
        try{
            const response = await api.post('/auth/signin', { email, password });
            user(response.data.user._id);
            login(response.data.token);
            this.props.history.push('/encontros');
        }catch(err){
            const { data } = err.response;
            alert(data.erro)
        }
        
    };

    render(){
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
                            <form onSubmit={this.handleSignIn}>
                                <div className="form-group">
                                    <input onChange={e => this.setState({ email: e.target.value })} className="form-control" name="email" type="email" placeholder="Digite seu email..." required />
                                </div>
                                <div className="form-group">
                                    <input onChange={e => this.setState({ password: e.target.value })} type="password" name="password" className="form-control" placeholder="Digite sua senha..." required />
                                </div>
                                <div className="btn-login d-flex justify-content-between">
                                    <Link className="btn btn-light" to="signup">Cadastrar</Link>
                                    <button type="submit" className="btn btn-ative">Entrar</button>
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


    

export default withRouter(SignIn);