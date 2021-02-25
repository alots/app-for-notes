import {notification} from "antd";
const superagent = require("superagent");

interface UserAttributes {
  mail: string,
  password: string 
}

const userAdapter = {
  newUser: (userRaw: UserAttributes) => {
    return {
      data: {
        type: "account",
        attributes: {
          email: userRaw.mail,
          password: userRaw.password,
          password_confirmation: userRaw.password
        }
      }
    }
  },
  acceptUser: (userRaw: UserAttributes) => {
    return {
      data: {
        type: "auth",
        attributes: {
          email: userRaw.mail,
          password: userRaw.password
        }
      }
    }
  }
}

export const addUser = (user: UserAttributes) => {
  const postUser = userAdapter.newUser(user);
  superagent.post('http://localhost:4567/api/v1/accounts')
  .send(postUser)
  .set('Accept', 'application/json')
  .then((res: any) => {
    if(res.statusCode === 200) {
      const token = res.body.meta.token;
      window.localStorage.setItem('token', token);
      window.location.pathname = '/notes';
    }
  })
  .catch((err: any) => {
    switch(err.message) {
      case 'Unprocessable Entity':
        notification.error({
          message: 'Ошибка запроса',
          description: 'Пользователь с таким именем уже сужествует',
        });
        break;
      default:
        notification.error({
          message: 'Ошибка сервера',
        });    
    }
  });;
};

export const successUser = (user: UserAttributes) => {
  const postUser = userAdapter.acceptUser(user);
  superagent.post('http://localhost:4567/api/v1/sign_in')
  .send(postUser)
  .set('Content-Type', 'application/json')
  .then((res: any) => { 
    if(res && res.body) {
      const token = res.body.meta.token;
      window.localStorage.setItem('token', token);
      window.location.pathname='/notes';
    }
  })
  .catch((err: any) => {
    switch (err.message) {
      case 'Bad Request':
        notification.error({
          message: 'Ошибка авторизации',
          description: 'Введены некорректные учетные данные',
        });
        break;
      case 'Unprocessable Entity':
        notification.error({
          message: 'Ошибка запроса',
          description: 'Введены неверные учетные данные или необходимо зарегистрироваться',
        });
        break;
      default:
        notification.error({
          message: 'Ошибка сервера',
        });     
    }
  });;
}