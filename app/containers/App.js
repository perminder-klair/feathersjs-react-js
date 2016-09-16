import './App.scss'

import React, { Component, PropTypes } from 'react';
import AltContainer from 'alt-container';

import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';

import Header from '../components/Header';

class App extends Component {
    componentDidMount() {
        //init load user
        AppActions.checkUser();
    }

    render() {
        let { isLoggedIn } = this.props.App;
        //console.log('isLoggedIn', this.props.App.isLoggedIn);

        return (
            <div>
                <Header isLoggedIn={isLoggedIn} />
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    App: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired
    })
}

const AppContainer = ({ children }) => (
    <AltContainer stores={{
        App: AppStore
    }}>
        <App children={children} />
    </AltContainer>
)

export default AppContainer;
