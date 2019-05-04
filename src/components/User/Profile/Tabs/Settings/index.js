import React, { Component } from 'react';
import './profilesettings.scss';
import {
    Button, Checkbox, CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Divider, FormControlLabel, FormGroup,
    Paper,
    Snackbar, Typography
} from "@material-ui/core";
import ChangeContentIfError from "../../../../../helpers/api/interceptor/changeContentIfError";
import {deleteUser} from "../../../../../helpers/api/user.api";
import MySnackbarContent from "../../../../Snackbars";
import {
    validAccountAboutMe,
    validAccountAge, validAccountCity, validAccountCountry,
    validAccountFirstName, validAccountHobby,
    validAccountLastName
} from "../../../../../helpers/validations/account.validations";
import {isFormValid} from "../../../../../helpers/validations";
import SettingsFields from "../../../Settings/Information/Fields";
import {accountDTO} from "../../../../../helpers/api/DTO/account.DTO";
import {updateAccount} from "../../../../../helpers/api/account.api";

class UserSettingsTab extends Component {
    state = {
        accountValues: {
            firstName: '',
            lastName: '',
            age: 0,
            hobby: '',
            country: '',
            city: '',
            aboutMe: '',
        },
        errors: {},
        deleteDialog: false,
        roleDialog: false,
        snackbar: {
            open: false,
            message: '',
            variant: '',
        },
        processing: false,
    };

    componentDidMount() {
        this.setState({accountValues: accountDTO(this.props.user)});
    }

    validation = () => {
        let values = this.state.accountValues;
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
        this.setState({accountValues: {...this.state.accountValues, [input]: e.target.value}})
    };

    changeAccountInformation = () => {
        let checkValid = this.validation();

        if(checkValid) {
            updateAccount(this.props.user.username, this.state.accountValues)
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

    deleteAction = () => {
        this.setState({processing: true});

        deleteUser(this.props.user.username)
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
            .finally(() => {
                this.setState({processing: false});
                this.handleClose();
            })
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

    handleClickOpen = (name) => e => {
        this.setState({ [name]: true });
    };

    handleClose = (name) => e => {
        this.setState({ [name]: false });
    };

    render() {
        const { snackbar, processing, errors, accountValues } = this.state;
        const { user } = this.props;
        const style = {
            marginBottom: '20px',
        };

        return (
            <ChangeContentIfError>
                <div className="user-profile-setting-container">
                    <Paper className="paper">
                        <div>
                            <div>
                                <div className="profile-settings-delete-user">
                                    <Typography variant="body2">
                                        Usuń użytkownika:
                                    </Typography>

                                    {
                                        processing
                                            ? <CircularProgress />
                                            : <Button
                                                className="profile-settings-delete-button"
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleClickOpen("deleteDialog")}
                                            >
                                                Usuń
                                            </Button>
                                    }
                                </div>

                                <Dialog
                                    open={this.state.deleteDialog}
                                    onClose={this.handleClose}
                                >
                                    <DialogTitle>Czy na pewno chcesz usunąć tego użytkownika?</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Akcji usunięcia użytkownika nie można przywrócić!
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick={this.handleClose("deleteDialog")}
                                        >
                                            Anuluj
                                        </Button>
                                        <Button
                                            onClick={this.deleteAction}
                                            color="primary"
                                            variant="contained"
                                        >
                                            Usuń
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>

                            <div style={style} />

                            <div>
                                <div className="profile-settings-delete-user">
                                    <Typography variant="body2">
                                        Uprawnienia użytkownika:
                                    </Typography>

                                    {
                                        processing
                                            ? <CircularProgress />
                                            : <Button
                                                className="profile-settings-delete-button"
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleClickOpen("roleDialog")}
                                            >
                                                Zmień
                                            </Button>
                                    }
                                </div>

                                <Dialog
                                    open={this.state.roleDialog}
                                    onClose={this.handleClose}
                                >
                                    <DialogTitle>Wybierz uprawnienia dla użytkownika {user.username}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            <FormGroup row>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            value="Administrator"
                                                        />
                                                    }
                                                    label="Administrator"
                                                />

                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            disabled
                                                            value="Użytkownik"
                                                        />
                                                    }
                                                    label="Użytkownik"
                                                />
                                            </FormGroup>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button
                                            onClick={this.handleClose("roleDialog")}
                                        >
                                            Anuluj
                                        </Button>
                                        <Button
                                            onClick={this.handleClose}
                                            color="primary"
                                            variant="contained"
                                        >
                                            Zmień
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>

                            <div style={style} />
                            <Divider />
                            <div style={style} />
                        </div>

                        <div>
                           <Typography variant="h6">
                               Ustawienia konta
                           </Typography>

                            <SettingsFields
                                errors={errors}
                                values={accountValues}
                                onChange={this.onChange}
                                onClick={this.changeAccountInformation}
                            />
                        </div>
                    </Paper>

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
                </div>
            </ChangeContentIfError>
        );
    }
}

export default UserSettingsTab;