import React, {Fragment} from 'react';

import white from '../assets/white.png';
import './style.scss';

interface MainLogoProps {
    collapsed: boolean;
}

const MainLogo: React.FC<MainLogoProps> = ({collapsed}) => {
    return (
        <Fragment>
            {
                collapsed ? null : <img className='logo' src={white} alt=' '/> 
            }
        </Fragment>
    );
}

export default MainLogo;