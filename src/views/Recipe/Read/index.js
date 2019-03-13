import React, { Component } from 'react';
import './readrecipe.scss';
import {Fab, Paper} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import ReadInformation from "../../../components/Recipe/Read/Information";
import ReadTabs from "../../../components/Recipe/Read/Tabs";
import EditRecipe from "../Edit";

class ReadRecipe extends Component {
    state = {
      editMode: false,
    };

    changeMode = () => {
        this.setState({editMode: !this.state.editMode});
    };

    render() {
        const { editMode } = this.state;

        return(
            <div className="read-recipe">
                {
                    !editMode
                        ? <div>
                            <Paper className="paper">
                                <ReadInformation />
                            </Paper>

                            <ReadTabs />


                            <Fab onClick={this.changeMode} className="floating-button-edit-recipe" color="secondary" aria-label="Edit recipe">
                                <Edit/>
                            </Fab>
                        </div>
                        : <div>
                            <form noValidate autoComplete="off">
                                <EditRecipe
                                    changeMode={this.changeMode}
                                />
                            </form>
                        </div>
                }
            </div>
        );
    };
}

export default ReadRecipe;