import React from 'react';
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

//import MainLayout from '../../layouts/MainLaout';
//import AuthLayout from '../../layouts/AuthLayoyt/AuthLayout';
//import NotesListPage from '../../pages/NoteList/NotesListPage';
//import NewNotePage from '../../pages/NewNote/NewNotePage';
import RegistrationPage from '../../pages/Registration/RegistrationPage';
import LoginPage from'../../pages/AuthPage/LoginPage';
import { routes } from '../../lib/config/routes';
import LoginRouter from '../Routes/LoginRouter';

const history = createBrowserHistory();

const Routers: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <LoginRouter path={routes.login} component={LoginPage} />
                <LoginRouter path={routes.registration} component={RegistrationPage} />
                <Route exact path='/'>
                    <Redirect to={routes.login}/>
                </Route>
            </Switch>          
        </Router>
    );
}

export default Routers;