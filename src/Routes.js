import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Meeting  from './components/meeting/Meeting';
import MeetingCreate from './components/meeting/MeetingCreate';
import { MeetingsAllList } from '../src/components/meeting/MeetingsAllList';
import MeetingOther from './components/meeting/MeetingOther';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={props => 
            isAuthenticated() ? (
                <Component { ...props } />
            ) : (
                <Redirect to={{ pathname: '/', state: { from: props.location }}} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <PrivateRoute path='/encontroCom' component={Meeting} />
            <PrivateRoute path='/marcarEncontro' component={MeetingCreate} />
            <PrivateRoute path='/agendadoPor' component={MeetingOther} />
            <PrivateRoute path='/todosEncontros' component={MeetingsAllList} />
            <Route path='*' component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes