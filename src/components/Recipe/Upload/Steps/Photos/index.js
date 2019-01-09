import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import { PhotoCamera, Photo } from '@material-ui/icons';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 15,
    },

    input: {
        display: 'none',
    },
});

class UploadStepsPhotos extends Component {
    state = {
        files: {},
        skipPhoto: false,
        error: false,
    };

    valid = () => {
        const file = this.state.files;
        let isError = false;

        for(let i = 0; i < file.length; i++) {
            let fileName = file[i].name;
            let fileExtension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);

            if (fileExtension !== 'jpeg' && fileExtension !== 'psng' && fileExtension !== 'jpg') {
                isError = "Obługujemy tylko pliki z rozszerzeniem .jpg, .png, .jpeg!";
            }
        }

        this.setState({error: isError});
        return isError;
    };

    onChange = e => {
        this.setState({files: e.target.files, error: false});
    };

    onSubmit = () => {
        let skipPhoto = this.state.skipPhoto;
        let isValid = this.valid();

        if(skipPhoto) {
            this.props.nextStep();
        } else {
            if(isValid) {
                this.props.nextStep();
            } else {
                this.setState({error: "Musisz wybrać przynajmniej jedno zdjęcie, jeżeli nie masz zdjęcia przepisu zaznacz checkboxa na dole"})
            }
        }
    };

    render() {
        const { classes, backStep } = this.props;

        return(
            <div>
                <Paper className={classes.root}>
                    <Typography color="secondary" variant="h6">
                        Zdjęcia przepisu
                    </Typography>

                    <div className="upload-recipe">
                        <div className="container-upload-button">
                            <div>
                                <input multiple accept="image/*" onChange={this.onChange} className={classes.input} id="icon-button-file" type="file" />
                                <Typography align="center">
                                    Aby dodać zdjęcia kliknij ikonę aparatu (aby dodać więcej niż jedno zdjęcie przytrzymaj CTRL)

                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" className={classes.button} component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Typography>

                                { this.state.error ?
                                    <Typography color="error" align="center">
                                        { this.state.error }
                                    </Typography>
                                    : false
                                }
                            </div>
                        </div>

                        <List>
                            {
                                Object.keys(this.state.files).map((item) => (
                                    <ListItem key={item}>
                                        <ListItemIcon>
                                            <Photo />
                                        </ListItemIcon>

                                        {this.state.files[item].name}
                                    </ListItem>
                                ))
                            }

                            { this.state.files.length > 0 ?
                                <Typography variant="caption" align="center">
                                    Aby ponownie wybrać zdjęcia kliknij ikonę aparatu
                                </Typography>
                                : null
                            }
                        </List>

                        <FormControlLabel control={
                            <Checkbox
                                checked={this.state.skipPhoto}
                                onChange={e => {
                                    this.setState({skipPhoto: e.target.checked})
                                }}
                                value="skipPhoto"
                            />
                        } label="Nie mam zdjęcia przepisu"/>
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button variant="text" onClick={backStep}>Wstecz</Button>
                    <Button variant="contained" color="primary" onClick={this.onSubmit}>Dalej</Button>
                </div>
            </div>
        );
    };
}

UploadStepsPhotos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadStepsPhotos);