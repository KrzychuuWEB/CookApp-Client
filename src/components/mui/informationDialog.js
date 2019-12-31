import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Dialog, DialogContent, DialogContentText, DialogTitle, LinearProgress} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    textCenter: {
        textAlign: "center",
    },
    box: {
        minWidth: 300,
        padding: "30px 20px",
    },
}));

function InformationDialog({ open, title, text }) {
    const classes = useStyles();

    return (
        <Dialog open={open}>
            <div className={classes.box}>
                <DialogTitle className={classes.textCenter}>
                    { title }
                </DialogTitle>

                <DialogContent>
                    <LinearProgress />
                </DialogContent>

                <DialogContent className={classes.textCenter}>
                    <DialogContentText>
                        { text }
                    </DialogContentText>
                </DialogContent>
            </div>
        </Dialog>
    );
}

export default InformationDialog;