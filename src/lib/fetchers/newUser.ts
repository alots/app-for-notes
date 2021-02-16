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
            console.log('Авторизация прошла успешно')
        }
     })
    .catch((err: any) => {
        console.log(err)
     });;
    //console.log(postUser);
};

export const successUser = (user: UserAttributes) => {
    const postUser = userAdapter.acceptUser(user);
    superagent.post('http://localhost:4567/api/v1/sign_in')
    .send(postUser)
    .set('Content-Type', 'application/json')
    .then((res: any) => { 
        if(res && res.body) {
            const token = res.body.meta.token;
            window.localStorage.setItem('token', token)
            window.location.pathname='/notes'
        }
    })
    .catch((err: any) => {
        if(err.message === 'Unprocessable Entity') {
            alert('Введены неправильные логин или пароль,или попробуйте авторизироваться')
        }
    });;

}