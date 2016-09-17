import React from 'react';
import _ from 'underscore';

import alt from '../lib/Alt';
import UsersActions from '../actions/UsersActions';

class UsersStore {
    constructor() {
        this.bindListeners({
            handleFetchUsers: UsersActions.fetchUsers,
            handleUsersFailed: UsersActions.usersFailed,
            handleUpdateUsers: UsersActions.updateUsers
        });

        this.state = {
            errorMessage: null,
            users: []
        };
    }

    handleFetchUsers() {
        //clear users state
    }

    handleUpdateUsers(users) {
        this.setState({
            users,
            errorMessage: null
        });
    }

    handleUsersFailed(errorMessage) {
        console.error('users failed', errorMessage);

        this.setState({
            errorMessage
        });
    }

    static getUserFor(_id) {
        let { users } = this.state;

        return _.findWhere(users, {_id});
    }
}

module.exports = alt.createStore(UsersStore, 'UsersStore');
