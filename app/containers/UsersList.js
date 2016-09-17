import React, {PropTypes} from 'react';
import AltContainer from 'alt-container';

import UsersListPage from '../pages/UsersList';
import UsersStore from '../stores/UsersStore';
import UsersActions from '../actions/UsersActions';

const UsersList = () => (
    <AltContainer stores={{
        Users: UsersStore
    }} actions={{
        UsersActions
    }}>
        <UsersListPage />
    </AltContainer>
)

export default UsersList;
