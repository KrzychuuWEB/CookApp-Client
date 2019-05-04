export const ChangePasswordDTO = (params) => {
    return {
        oldPassword: params.oldPassword,
        newPassword: params.password.first,
        repeatNewPassword: params.password.second,
    };
};