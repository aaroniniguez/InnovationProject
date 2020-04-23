import axios from "axios";
const instance = axios.create({
  baseURL: `https://${process.env.NAMED_HOST}/api/innovation`,
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

export const update = (payload, onSuccess, onFail) =>  {
    instance.put("account", payload, useConfig())
    .then(response => {
        onSuccess && onSuccess(response)
    })
    .catch(e => {
        onFail && onFail(e)
    })
}
