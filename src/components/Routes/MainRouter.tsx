import React from 'react';
import {Route} from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';

interface MainRouterProps {
    component: React.ElementType,
    path: string
}

const MainRouter: React.FC<MainRouterProps> = ({component: Component, path}) => {
    return (
        <Route path={path} render={(props) => (
            <MainLayout>
               <Component {...props}/>
            </MainLayout>
        ) }/>
    );
}

export default MainRouter;