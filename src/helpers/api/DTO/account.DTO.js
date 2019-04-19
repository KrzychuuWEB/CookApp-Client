export const accountDTO = (account) => {
    return {
        firstName: account.first_name,
        lastName: account.last_name,
        age: account.age,
        hobby: account.hobby,
        country: account.country,
        city: account.city,
        aboutMe: account.about_me,
    };
};