const serverUrl = "http://localhost:8000/api/v1";

export const loginApiUrl = `${serverUrl}/login_check`;
export const registerApiUrl = `${serverUrl}/users`;
export const findUserByUsernameUrl = `${serverUrl}/users/`;
export const changeUserPasswordUrl = (username) => `${serverUrl}/users/${username}/passwords`;
export const deleteUserUrl = (username) => `${serverUrl}/users/${username}`;

export const updateUserAccountUrl = `${serverUrl}/accounts/`;