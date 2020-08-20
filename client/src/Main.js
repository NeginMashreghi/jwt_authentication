import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch ,Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Login from './Components/Login'
import Profile from './Components/Profile'

class Main extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <Router>
                <Switch>
                    <Route
                    exact
                    path="/"
                    render={props => (
                        <Login {...props}    />
                    )}
                    />

                    {
                        isAuthenticated?(<Route
                            exact
                            path="/profile"
                            render={props => (
                                <Profile {...props}   />
                            )}
                            />):(
                                <Redirect to="/" />
                            )
                    }
                    

                    
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.users
  });
  
export default connect(mapStateToProps, {})(Main);