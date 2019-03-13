import React, { Component } from 'react';
import './photos.scss';
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/es/ListItemIcon/ListItemIcon";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";
import {Photo, PhotoCamera} from "@material-ui/icons";
import Typography from "@material-ui/core/es/Typography";

class RecipePhotosFields extends Component {
    render() {
        const { errors, onChange, values, skipPhoto, onChangeSkipPhoto } = this.props;

        return (
            <div className="recipe-photos-fields">
                <div className="container-upload-button">
                    <div>
                        <input multiple accept="image/*" onChange={onChange("photo")} style={{display: 'none'}} id="icon-button-file" type="file" />
                        <Typography align="center">
                            Aby dodać zdjęcia kliknij ikonę aparatu (aby dodać więcej niż jedno zdjęcie przytrzymaj CTRL)

                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Typography>

                        { errors ?
                            <Typography color="error" align="center">
                                { errors.extension }
                                { errors.empty }
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
                        checked={skipPhoto}
                        onChange={onChangeSkipPhoto}
                        value="skipPhoto"
                    />
                } label="Nie mam zdjęcia przepisu"/>
            </div>
        );
    }
}

export default RecipePhotosFields;
