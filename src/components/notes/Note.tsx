import React,{Fragment} from 'react';
import { Card } from 'antd';

import { NoteProps } from '../../lib/types/index';
import './style.scss';

const Note: React.FC<React.PropsWithChildren<NoteProps>> = ({
    name,
    description,
    createdAt
}) => {
    return (
        <Fragment>
            <div className="site-card-border-less-wrapper">
                <Card title={name} bordered={false} style={{ width: 300 }}>
                    <p>{description}</p>
                </Card>
            </div>            
        </Fragment>   
    );
}

export default Note;