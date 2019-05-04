import jwt_decode from 'jwt-decode';

export function setUser(token)
{
    let user = JSON.stringify(jwt_decode(token));

    sessionStorage.setItem("user_info", user);
}

export function getUser()
{
    return JSON.parse(sessionStorage.getItem("user_info"));
}

export function setUserToken(token)
{
    sessionStorage.setItem("user_token", token);
}

export function getUserToken()
{
    return sessionStorage.getItem("user_token")
}

export function destroyUserStorage()
{
    sessionStorage.removeItem("user_info");
    sessionStorage.removeItem("user_token");
}