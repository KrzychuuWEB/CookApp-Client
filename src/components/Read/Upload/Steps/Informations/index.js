import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import InputAdornment from "@material-ui/core/es/InputAdornment/InputAdornment";
import Button from "@material-ui/core/es/Button/Button";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 15,
    },

    field: {
        width: '100%',
        marginBottom: 15,
    },
});

class UploadStepsInformations extends Component {
    render() {
        const { classes, handleChange, values, nextStep } = this.props;

        return (
            <div>
                <Paper className={classes.root}>
                    <Typography color="secondary" variant="title">
                        Informacje o przepisie
                    </Typography>

                    <div className="upload-recipe">
                        <TextField
                            onChange={handleChange('recipe_name')}
                            className={classes.field}
                            label="Nazwa przepisu"
                            name="recipe_name"
                            value={values.recipe_name}
                        />

                        <TextField
                            onChange={handleChange('recipe_description')}
                            className={classes.field}
                            name="recipe_description"
                            label="Opis przepisu"
                            multiline
                            rows="4"
                            value={values.recipe_description}
                        />

                        <FormControl className={classes.field}>
                            <InputLabel htmlFor="recipe_level_label">Poziom trudności</InputLabel>
                            <Select
                                value={values.recipe_level}
                                onChange={handleChange('recipe_level')}
                                inputProps={{
                                    name: 'recipe_level',
                                    id: 'recipe_level_label',
                                }}
                            >
                                <MenuItem value={1}>Łatwy</MenuItem>
                                <MenuItem value={2}>Średni</MenuItem>
                                <MenuItem value={3}>Trudny</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            onChange={handleChange('recipe_time')}
                            name="recipe_time"
                            type="number"
                            className={classes.field}
                            label="Czas przygotowania przepisu"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">Minut</InputAdornment>
                            }}
                            value={values.recipe_time}
                        />
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={nextStep}
                    >Dalej</Button>
                </div>
            </div>
        );
    };
}

UploadStepsInformations.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadStepsInformations);