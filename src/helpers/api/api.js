import axios from 'axios';

const postAndPutSkeleton = (url, method, body, resolve, reject) => {
    axios({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept-Language': 'pl',
        },
        data: JSON.stringify(body),
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

export const post = (url, data) => {
    return new Promise(
        (resolve, reject) => postAndPutSkeleton(url, 'POST', data, resolve, reject)
    );
};

export const put = (url, data) => {
    return new Promise(
        (resolve, reject) => postAndPutSkeleton(url, 'PUT', data, resolve, reject)
    );
};

export const deleteApi = (url) => {
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