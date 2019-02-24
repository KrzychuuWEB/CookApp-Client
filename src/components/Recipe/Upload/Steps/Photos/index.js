import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography";
import Button from "@material-ui/core/es/Button/Button";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import { PhotoCamera, Photo } from '@material-ui/icons';
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

class UploadStepsPhotos extends Component {
    state = {
        skipPhoto: false,
        errors: {},
    };

    valid = () => {
        const photos = this.props.values.photos;
        let setErrors = {};
        let isValid = true;

        for(let i = 0; i < photos.length; i++) {
            let fileName = photos[i].name;
            let fileExtension = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);

            if (fileExtension !== 'jpeg' && fileExtension !== 'png' && fileExtension !== 'jpg') {
                setErrors.extension = "Obługujemy tylko pliki z rozszerzeniem .jpg, .png, .jpeg!";
                isValid = false;
            }
        }

        if(!photos.length > 0) {
            setErrors.empty = "Musisz wybrać przynajmniej jedno zdjęcie, jeżeli nie masz zdjęcia przepisu zaznacz \"Nie mam zdjęcia przepisu\"";
            isValid = false;
        }

        this.setState({errors: setErrors});
        return isValid;
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
                return false;
            }
        }
    };

    render() {
        const { backStep, values, handleChange } = this.props;

        return(
            <div>
                <Paper className="upload-box">
                    <Typography color="secondary" variant="h6">
                        Zdjęcia przepisu
                    </Typography>

                    <div className="upload-recipe">
                        <div className="container-upload-button">
                            <div>
                                <input multiple accept="image/*" onChange={handleChange("photo")} style={{display: 'none'}} id="icon-button-file" type="file" />
                                <Typography align="center">
                                    Aby dodać zdjęcia kliknij ikonę aparatu (aby dodać więcej niż jedno zdjęcie przytrzymaj CTRL)

                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Typography>

                                { this.state.errors ?
                                    <Typography color="error" align="center">
                                        { this.state.errors.extension }
                                        { this.state.errors.empty }
                                    </Typography>
                                    : false
                                }
                            </div>
                        </div>

                        <List>
                            {
                                Object.keys(values.photos).map((item) => (
                                    <ListItem key={item}>
                                        <ListItemIcon>
                                            <Photo />
                                        </ListItemIcon>

                                        {values.photos[item].name}
                                    </ListItem>
                                ))
                            }

                            { values.photos.length > 0 ?
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

export default UploadStepsPhotos;