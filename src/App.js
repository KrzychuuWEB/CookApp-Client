import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import Header from './components/Header';
import Home from './views/Home';
import Login from "./views/Security/Login";
import Register from "./views/Security/Register";
import ReadRecipe from "./views/Recipe/Read";
import UploadRecipe from "./views/Recipe/Upload";
import UserProfile from "./views/User/Profile";

class App extends Component {
    render() {
        const loader = document.getElementById('md-loader');

        if(loader) {
            loader.classList.add("hide-loader");
        }

        return (
            <Router>
                <ScrollToTop>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/recipe/:id" component={ReadRecipe} />
                        <Route exact path="/upload" component={UploadRecipe} />
                        <Route exact path="/user/:id" component={UserProfile} />
                    </div>
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
