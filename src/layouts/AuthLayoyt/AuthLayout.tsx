import React from 'react';
import {Col,Row} from 'antd';

import './style.scss';

const AuthLayout: React.FC = ({children}) => {
    return (
        <Row className="authorization" justify="center" align="top">
            <Col className="authorization__form" xs={24} md={10}>
                {children}
            </Col>
        </Row>
    );
}

export default AuthLayout;