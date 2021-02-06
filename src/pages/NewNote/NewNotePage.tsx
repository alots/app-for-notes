import React from 'react';
import { Form, Input, Button } from 'antd';

import moment from 'moment';

import './style.scss';

interface IFormInput {
    name: string,
    description: string,
    createdAt: string,
}

const NewNotePage: React.FC = () => {

    const onSubmit = (data: IFormInput) =>{
        data.createdAt = moment().toISOString(true);
        console.log(data);
    } 
    return (
        <div className='form'>
            <Form 
                name='newNotes-form' 
                onFinish={onSubmit}
                labelAlign = {'left'}
            >
                <Form.Item name='name' label='Введите название заметки' rules={[{ required: true }]}>
                    <Input/>
                </Form.Item>
                <Form.Item name='description' label='Введите описание' rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default NewNotePage;