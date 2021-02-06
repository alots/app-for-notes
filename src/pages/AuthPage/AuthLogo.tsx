import React, {Fragment} from 'react';

import blue from '../../assets/blue.png';
import './style.scss';

const AuthLogo: React.FC = () => {
    return (
        <Fragment>
            <img className='logo' src={blue} alt=' '/> 
        </Fragment>
    );
}

export default AuthLogo;