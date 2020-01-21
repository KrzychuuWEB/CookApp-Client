import React from "react";
import {Snackbar} from "@material-ui/core";
import MUISnackbar from "../mui/snackbar";
import { useSelector, useDispatch } from "react-redux";
import {removeSnackNotification} from "../../services/notifications/snackbar/duck/operations";

const Index = ({ children }) => {
    const notification = useSelector(state => state.snackNotification);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(removeSnackNotification());
    };

    return (
        <div>
            <Snackbar  anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }} autoHideDuration={6000}
                       onClose={handleClose} open={notification.open}>
                <MUISnackbar variant={notification.variant} onClose={handleClose} message={notification.message} />
            </Snackbar>

            { children }
        </div>
    );
};

export default Index;