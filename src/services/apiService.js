import axios from "axios";
const instance = axios.create({
  baseURL: `http://${process.env.HOST}:${process.env.SERVER_PORT}/innovation`,
  timeout: 1000,
});

const loginPage = `http://${process.env.HOST}:${process.env.CLIENT_PORT}/login`;
const accountPage = `http://${process.env.HOST}:${process.env.CLIENT_PORT}/account`

function useConfig() {
    let config = {
        // withCredentials: true
    }
    return config;
}

export const getCards = (onSuccess, onFail) => {
    instance.get(`cards`, useConfig())
        .then(response => {
            onSuccess && onSuccess(response)
        })
        .catch((e) => {
            console.log(e)
            // window.location.replace(loginPage)
            onFail && onFail(e)
        })
}

export const getCard = (cardName, onSuccess, onFail) => {
    instance.get(`cards/${cardName}`, useConfig())
        .then(response => {
            onSuccess && onSuccess(response)
        })
        .catch((e) => {
            console.log(e)
            // window.location.replace(loginPage)
            onFail && onFail(e)
        })
}

export const login = (payload, onSuccess, onFail) => {
    instance.post("login", payload, useConfig())
        .then(response => {
            onSuccess && onSuccess(response)
            window.location.replace(accountPage);
        })
        .catch((e) => {
            onFail && onFail(e)
        })
}

export const logout = (onSuccess, onFail) => {
    instance.get("logout", useConfig())
        .then(response => {
            onSuccess && onSuccess(response)
        })
        .catch((e) => {
            onFail && onFail(e)
        })
}
export const signup = (payload, onSuccess, onFail) =>  {
    instance.post("account", payload)
    .then(response => {
        onSuccess && onSuccess(response)
    })
    .catch(e => {
        onFail && onFail(e)
    })
}

export const update = (payload, onSuccess, onFail) =>  {
    instance.put("account", payload, useConfig())
    .then(response => {
        onSuccess && onSuccess(response)
    })
    .catch(e => {
        onFail && onFail(e)
    })
}
