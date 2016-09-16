import React, { Component } from 'react';
import alertify from 'alertify.js';

import AppActions from '../actions/AppActions';

import TextInputGroup from '../elements/TextInputGroup';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = () => {
        console.log('login', this.state);
        AppActions.login(this.state);
        alertify.success('Login successfully!');
    }

    render() {
        return (
            <div className="ui main container">
                <h1 className="ui header">Login</h1>
                <div className="ui form">
                    <TextInputGroup
                        label="Email"
                        value={this.state.email}
                        onChange={(e) => this.setState({email: e.target.value})}/>
                    <TextInputGroup
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={(e) => this.setState({password: e.target.value})}/>
                    <button
                        className="ui button"
                        type="submit"
                        onClick={this.handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        )
    }
}

export default Login;
