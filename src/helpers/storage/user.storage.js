import jwt_decode from 'jwt-decode';

export function setUser(token)
{
    let user = JSON.stringify(jwt_decode(token));

    localStorage.setItem("user_info", user);
}

export function getUser()
{
    return JSON.parse(localStorage.getItem("user_info"));
}

export function setUserToken(token)
{
    localStorage.setItem("user_token", token);
}

export function getUserToken()
{
    return localStorage.getItem("user_token")
}

export function destroyUserStorage()
{
    localStorage.removeItem("user_info");
    localStorage.removeItem("user_token");
}