import React, {useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import ApiErrors from "../../../components/errors/apiErrors";
import {Button} from "@material-ui/core";
import { Settings, NetworkCheck, SentimentVeryDissatisfied } from "@material-ui/icons";
import {routePath} from "../../pages.routes";

const ApiErrorsControl = ({ children }) => {
    const [ error, setError ] = React.useState({error: false});

    useEffect(() => {
        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            let errorStatus = false;

            if(error.response) {
                if(error.response.status >= 500) {
                    errorStatus = 500;
                } else if(error.response.status === 403) {
                    errorStatus = 403;
                }
            } else {
                errorStatus = "Network";
            }

            setError({error: errorStatus});
            return Promise.reject(error);
        });
    }, []);

    return (
        <div>
            {
                error.error
                    ? <div>
                        {
                            error.error === 500 && <ApiErrors
                                icon={(<Settings />)}
                                title="Brak połączenia z serwerem"
                                description="Przepraszamy mamy chwilowe problemy z serwerem! Pracujemy nad rozwiązaniem problemu."
                                actions={(<Button color="primary" variant="outlined" component={Link} to={routePath.home}>strona główna</Button>)}
                            />
                        }

                        {
                            error.error === 403 && <ApiErrors
                            icon={(<SentimentVeryDissatisfied />)}
                            title="Brak uprawnień"
                            description="Twoje konto nie posiada odpowiednich uprawnień do przeglądania tej strony!"
                            actions={(<Button color="primary" variant="outlined" component={Link} to={routePath.home}>strona główna</Button>)}
                            />
                        }

                        {
                            error.error === "Network" && <ApiErrors
                                icon={(<NetworkCheck />)}
                                title="Brak połączenia z internetem"
                                description="Twój komputer jest odłączony od sieci!"
                            />
                        }
                    </div>
                    : <div>{ children }</div>
            }
        </div>
    );
};

export default ApiErrorsControl;