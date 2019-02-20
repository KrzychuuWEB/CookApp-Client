import React, { Component } from 'react';
import '../../upload.scss';
import Paper from "@material-ui/core/es/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import Button from "@material-ui/core/es/Button/Button";
import NewFieldStepByStep from "./NewField";

class UploadStepByStep extends Component {
    state = {
        steps: [
            {
                name: '',
                description: '',
                step: 1,
            },
        ]
    };

    setDefaultValues = index => {
        let steps = [
            ...this.state.steps,
            {
                name: '',
                description: '',
                step: index,
            }
        ];

        this.setState({...this.state.steps, steps});
    };

    deleteStepInState = index => {
        let steps = [...this.state.steps];

        steps.splice(steps.indexOf(index), 1);

        this.setState({steps});
    };

    onChange = (index, input) => e => {
        let inputValue = e.target.value;

        this.setState(state => ({
            steps: state.steps.map(item => {
                if(item.step === index) {
                    return {...item, [input]: inputValue};
                }

                return item;
            })
        }));
    };

    onSubmit = () => {
        return true;
    };

    render() {
        const { backStep } = this.props;
        console.log(this.state.steps);

        return (
            <div>
                <Paper className="upload-box">
                    <Typography variant="h6" color="secondary">
                        Informacje o krokach
                    </Typography>

                    <div className="upload-recipe">
                        <div className="center-field">
                            <NewFieldStepByStep
                                onChange={this.onChange}
                                setDefaultValues={this.setDefaultValues}
                                deleteStep={this.deleteStepInState}
                                values={this.state.steps}
                            />
                        </div>
                    </div>
                </Paper>

                <div className="steps-button">
                    <Button
                        variant="text"
                        onClick={backStep}
                    >Wróć</Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.onSubmit}
                    >Dodaj przepis</Button>
                </div>
            </div>
        );
    }
}

export default UploadStepByStep;