import React, { Component } from 'react';
import {Paper, Snackbar} from "@material-ui/core";
import {isFormValid} from "../../../../helpers/validations";
import {
    validAccountAboutMe,
    validAccountAge, validAccountCountry,
    validAccountFirstName, validAccountHobby,
    validAccountLastName, validAccountCity
} from "../../../../helpers/validations/account.validations";
import {getUserByUsername} from "../../../../helpers/api/user.api";
import {getUser} from "../../../../helpers/storage/user.storage";
import {accountDTO} from "../../../../helpers/api/DTO/account.DTO";
import {updateAccount} from "../../../../helpers/api/account.api";
import CircularLoader from "../../../Loaders/Circular";
import MySnackbarContent from "../../../Snackbars";
import ChangeContentIfError from "../../../../helpers/api/interceptor/changeContentIfError";
import SettingsFields from "./Fields";

class SettingsUserInformation extends Component {
    state = {
        values: {
            firstName: '',
            lastName: '',
            age: 0,
            hobby: '',
            country: '',
            city: '',
            aboutMe: '',
        },
        errors: {},
        processing: true,
        snackbar: {
            open: false,
            message: '',
            variant: '',
        },
    };

    componentDidMount() {
        getUserByUsername(getUser().username)
            .then(response => {
                let data = JSON.parse(response.data.user);
                let account = accountDTO(data);

                this.setState({values: {...this.state.values, ...account}});
            })
            .finally(() => {
                this.setState({processing: false});
            });
    }

    validation = () => {
        let values = this.state.values;
        let errors = {};

        validAccountFirstName(errors, values, "firstName");
        validAccountLastName(errors, values, "lastName");
        validAccountAge(errors, values, "age");
        validAccountHobby(errors, values, "hobby");
        validAccountCountry(errors, values, "country");
        validAccountCity(errors, values, "city");
        validAccountAboutMe(errors, values, "aboutMe");

        this.setState({errors: errors});
        return isFormValid(errors);
    };

    onChange = (input) => e => {
        this.setState({values: {...this.state.values, [input]: e.target.value}})
    };

    onSubmit = () => {
        let checkValid = this.validation();

        if(checkValid) {
            updateAccount(getUser().username, this.state.values)
                .then(response => {
                    this.setState({snackbar: {
                            open: true,
                            message: response.data.success,
                            variant: 'success',
                        }
                    });
                })
                .catch(error => {
                    this.setState({snackbar: {
                            open: true,
                            message: error.response.data.error,
                            variant: 'error',
                        }
                    });
                })
            ;
        } else {
            return false;
        }
    };

    closeSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({snackbar: {
                open: false,
                message: '',
                variant: '',
            }
        });
    };

    render() {
        const {errors, values, processing, snackbar} = this.state;

        return (
            <div>
                <ChangeContentIfError>
                    {
                        processing
                            ? <CircularLoader />
                            : <Paper className="paper">
                                <SettingsFields
                                    errors={errors}
                                    values={values}
                                    onChange={this.onChange}
                                    onClick={this.onSubmit}
                                />
                            </Paper>
                    }

                    {
                        snackbar.open &&
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            open={snackbar.open}
                        >
                            <MySnackbarContent
                                onClose={this.closeSnackbar}
                                variant={snackbar.variant}
                                message={snackbar.message}
                            />
                        </Snackbar>
                    }
                </ChangeContentIfError>
            </div>
        );
    }
}


export default SettingsUserInformation;