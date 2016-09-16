import './App.scss'

import React, { Component } from 'react';

import AppActions from '../actions/AppActions';

import Header from '../components/Header';

class App extends Component {
    componentDidMount() {
        //init load user
        AppActions.checkUser();
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}

export default App;
