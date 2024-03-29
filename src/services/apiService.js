import axios from "axios";
let baseURL;
if(process.env.ENVIRONMENT === "DEVELOPMENT") {
    baseURL = `http://${process.env.HOST}:${process.env.SERVER_PORT}/api/innovation`;
} else {
    baseURL = `https://${process.env.HOST}/api/innovation`;
}
const instance = axios.create({
  baseURL,
  timeout: 1000,
});

function useConfig() {
    let config = {
        // withCredentials: true
    }
    return config;
}

export const getCards = (searchParams, onSuccess, onFail) => {
    instance.get(`cards${searchParams}`, useConfig())
        .then(response => {
            onSuccess && onSuccess(response)
        })
        .catch((e) => {
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
            // window.location.replace(loginPage)
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
