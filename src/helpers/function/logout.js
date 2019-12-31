import {destroyUserStorage, destroyUserToken} from "../storage/user.storage";

export const logoutProcess = () => {
    destroyUserStorage();
    destroyUserToken("token");
    destroyUserToken("refresh_token");
};