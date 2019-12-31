import React from 'react';
import DefaultTemplate from "../../components/templates/default";
import ApiErrorsControl from "../../helpers/api/interceptors/apiErrorsControl";
import axios from "axios";
import Button from "@material-ui/core/Button";
import {CircularProgress, Typography} from "@material-ui/core";

const HomeContainer = () => {
    const [data, setData] = React.useState({
        fail: true,
    });
    const [loading, setLoading] = React.useState({
        loading: false,
    });

    const getData = () => {
        setLoading({loading: true});

        axios.get("http://localhost:8000/v1/testroute")
            .then(function (response) {
                setData(response.data);
            })
            .catch(function (error) {
                console.log(error.response);
            })
            .finally(() => {
                setLoading({loading: false});
            })
    };

    return (
        <DefaultTemplate>
            <ApiErrorsControl>
                <Button onClick={getData}>API</Button>

                {
                    loading.loading ? <CircularProgress color="primary" />
                    : <Typography variant="h6" color="secondary">
                            { data.message }
                        </Typography>
                }
            </ApiErrorsControl>
        </DefaultTemplate>
    );
};

export default HomeContainer;