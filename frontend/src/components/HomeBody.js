import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    UserLogin,
    UserSignUp,

} from "react-router-dom";
import UserRegistration from './RegistrationForm';

class HomeBody extends Component {
    render() {
        return (
            <div>
                <div className='welcomeMessage'>
                    <h1>Welcome...</h1>
                </div>
                <Router>
                    <Link to="/login">
                        <button><h3>Log In</h3></button>
                    </Link>
                    <Link to="/register">
                        <button><h3>Sign Up</h3></button>
                    </Link>
                    <Switch>
                        <Route path="/login">
                            <UserLogin />
                        </Route>
                        <Route path="/register">
                            <UserSignUp />
                        </Route>
                    </Switch>
                </Router>

                <div className='homeBodyText'>
                    <h3>What we do</h3>
                    <h3>How it works</h3>
                    <h3>Why join</h3>
                </div>
            </div>
        );
    }
};

export default HomeBody;