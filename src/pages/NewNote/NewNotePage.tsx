import React from 'react';
import { Form, Input, Button } from 'antd';

import {NoteProps} from '../../lib/types/index';
import {newNote} from '../../lib/fetchers/notes';

import './style.scss';

const NewNotePage: React.FC = () => {

  const onSubmit = (data: NoteProps) =>{
    newNote(data);
  } 
  return (
    <div className='form'>
      <Form 
        name='newNotes-form' 
        onFinish={onSubmit}
        labelAlign = {'left'}
      >
        <Form.Item name='title' label='Введите название заметки' rules={[{ required: true }]}>
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