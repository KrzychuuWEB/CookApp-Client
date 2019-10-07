import axios from 'axios';

const postAndPutSkeleton = (url, method, body, resolve, reject, convertToJSON) => {
    axios({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept-Language': 'pl',
        },
        data: convertToJSON ? JSON.stringify(body) : body,
    })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })
};

export const get = (url) => {
    return new Promise(
        (resolve, reject) => {
            axios({
                method: 'GET',
                url: url,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept-Language': 'pl',
                },
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        }
    );
};

export const post = (url, data, convertToJSON = true) => {
    return new Promise(
        (resolve, reject) => postAndPutSkeleton(url, 'POST', data, resolve, reject, convertToJSON)
    );
};

export const put = (url, data, convertToJSON = true) => {
    return new Promise(
        (resolve, reject) => postAndPutSkeleton(url, 'PUT', data, resolve, reject, convertToJSON)
    );
};

export const deleteMethod = (url) => {
    return new Promise(
        (resolve, reject) => {
            axios({
                method: 'DELETE',
                url: url,
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept-Language': 'pl',
                },
            })
                .then(response => {
                    resolve(response);
                })
                .catch(error => {
                    reject(error);
                })
        }
    );
};