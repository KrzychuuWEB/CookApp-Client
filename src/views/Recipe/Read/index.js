import React, { Component } from 'react';
import './readrecipe.scss';
import {Fab, Paper} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import ReadInformation from "../../../components/Recipe/Read/Information";
import ReadTabs from "../../../components/Recipe/Read/Tabs";
import EditRecipe from "../Edit";
import * as recipeApi from "../../../helpers/api/recipe.api";
import ChangeContentIfError from "../../../helpers/api/interceptor/changeContentIfError";
import CircularLoader from "../../../components/Loaders/Circular";
import SearchError from "../../Errors/Search";

class ReadRecipe extends Component {
    state = {
        editMode: false,
        recipe: {},
        processing: true,
        searchError: false,
    };

    changeMode = () => {
        this.setState({editMode: !this.state.editMode});
    };

    componentWillReceiveProps(nextProps, nextContext) {
        const recipeSlug = nextProps.match.params.recipeSlug;

        this.state.searchError && this.setState({searchError: false});

        this.loadRecipe(recipeSlug);
    }

    componentDidMount() {
        const recipeSlug = this.props.match.params.recipeSlug;
        this.loadRecipe(recipeSlug);
    }

    loadRecipe = async (recipeSlug) => {
        await recipeApi.getRecipeBySlug(recipeSlug)
            .then(response => {
                this.setState({recipe: JSON.parse(response.data.recipe)});
            })
            .catch(() => {
                this.setState({searchError: true});
            })
            .finally(() => {
                this.setState({processing: false});
            });
    };

    render() {
        const { editMode, recipe, searchError, processing } = this.state;

        return(
           <ChangeContentIfError>
               <div className="read-recipe">
                   {
                       processing
                           ? <CircularLoader />
                           : <div>
                               {
                                   searchError
                                       ? <SearchError />
                                       : <div>
                                           {
                                               !editMode
                                                   ? <div>
                                                       <Paper className="paper">
                                                           <ReadInformation recipe={recipe} />
                                                       </Paper>

                                                       <ReadTabs recipe={recipe} />

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
                               }
                           </div>
                   }
               </div>
           </ChangeContentIfError>
        );
    };
}

export default ReadRecipe;