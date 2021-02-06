import React from 'react';
import {Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

import AuthLogo from './AuthLogo';
import {routes} from '../../lib/config/routes';

import './style.scss';


const LoginPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Form
            name='loginForm'
            initialValues={{ remember: true }}
            labelAlign = {'left'}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className='loginForm__logo'>
                <AuthLogo/>
            </div>
            <Form.Item
                label="Email"
                name="mail"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
            <Link to={routes.registration}>
             Or register now
            </Link>
      </Form.Item>
    </Form>
    );
}

export default LoginPage;