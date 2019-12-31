import jwt_decode from "jwt-decode";

export const addUserToStorage = (userToken) => {
      let user = JSON.stringify(jwt_decode(userToken));

      localStorage.setItem("user_info", user);
};

export const getUserStorage = () => {
    return JSON.parse(localStorage.getItem("user_info"));
};

export const destroyUserStorage = () => {
    localStorage.removeItem("user_info");
};

export const setUserToken = (tokenName, token) => {
    localStorage.setItem(`user_${tokenName === "token" ? "token" : "refresh_token"}`, token);
};

export const getUserToken = (tokenName) => {
    return localStorage.getItem(`user_${tokenName === "token" ? "token" : "refresh_token"}`);
};

export const destroyUserToken = (tokenName) => {
    localStorage.removeItem(`user_${tokenName === "token" ? "token" : "refresh_token"}`);
};