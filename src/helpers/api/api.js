import axios from 'axios';

const postAndPutSkeleton = (url, method, body, resolve, reject) => {
    return axios({
        method: method,
        url: url,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(body),
        // data: {
        //     'username': 'nowy',
        //     'plainPassword': 'gsadgsadg',
        //     'email': 'sadgasdgsad@wp.pl',
        // },
    })
        .then(response => {
            if(response.status === 200) {
                resolve(response);
            } else {
                reject(response);
            }
        })
        .catch(error => {
            console.log(error.response.data);
        })
};

export const post = (url, data) =>
    new Promise(
        (resolve, reject) => postAndPutSkeleton(url, 'POST', data, resolve, reject)
    );