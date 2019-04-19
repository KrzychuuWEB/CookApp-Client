import React, { Component } from 'react';
import './search.scss';
import { Search } from '@material-ui/icons';
import {Icon, Typography} from "@material-ui/core";

class SearchError extends Component {
    render() {
        return (
            <div className="search-error-container">
                <div>
                    <Icon>
                        <Search className="search-icon" color="primary" />
                    </Icon>

                    <Typography variant="h4" color="primary">
                        Brak wyników
                    </Typography>

                    <Typography variant="body2">
                        Wypróbuj inne słowa kluczowe
                    </Typography>
                </div>
            </div>
        );
    }
}


export default SearchError;