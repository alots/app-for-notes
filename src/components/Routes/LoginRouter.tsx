import React from 'react';
import {Route} from 'react-router-dom';

import AuthLayout from '../../layouts/AuthLayoyt/AuthLayout';

interface LoginRouterProps{
    component: React.ElementType
    path: string 
}

const LoginRouter: React.FC<LoginRouterProps> = ({component: Component, path}) => {
    return (
        <Route path={path} render={(props) => (
             <AuthLayout>
                <Component {...props}/>
             </AuthLayout>
         ) }/>
    );
}

export default LoginRouter;