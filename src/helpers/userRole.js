import {getUser} from "./storage/user.storage";

export const getUserRole = (role) => {
    return !!(getUser() && roleInArray(getUser().roles, role));
};

function roleInArray(array, role)
{
    return array.indexOf(role) > -1;
}