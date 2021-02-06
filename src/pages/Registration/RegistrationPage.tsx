import React from 'react';
import {Form, Input, Button} from 'antd';

const RegistrationPage: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Save:', values);
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      }; 
    const mailPattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;  

    return (
        <Form
            name='RegistrationForm'
            labelAlign = {'left'}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label='Email'
                name='mail'
                rules={[{ required: true, message: 'Please input your mail!' }, 
                        { pattern: mailPattern, 
                          message: 'Please input correct mail!'},
                        ]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label='Password'
                name='password'
                rules={[{required: true, message: 'Please input your password!'},
                        {min: 6, message: 'Your password should be more then 6 symbols!'},
                        {pattern: /^[a-zA-Z0-9]+/, message: 'Use: a-z,A-Z,0-9'}
                    
                        ]}
            >
                <Input/>
            </Form.Item>
            <Button type="primary" htmlType="submit">
            Register
            </Button>
        </Form>
    );
}

export default RegistrationPage;