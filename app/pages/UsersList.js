import React, { Component, PropTypes } from 'react';

import UsersActions from '../actions/UsersActions';

import UserItem from '../components/UserItem';

class UsersList extends Component {
    componentDidMount() {
        //init users
        UsersActions.fetchUsers();
    }

    render() {
        let { users } = this.props.Users;
        //console.log('users', users);

        return (
            <div className="ui main container">
                <h1 className="ui header">Users</h1>
                {users.length === 0
                    ? <div className="ui message">
                            <div className="header">
                                No users found.
                            </div>
                        </div>
                    : <div className="ui items">
                        {users.map(user => <UserItem key={user._id} user={user}/>)}
                    </div>
                }
            </div>
        )
    }
}

UsersList.propTypes = {
    Users: PropTypes.shape({
        users: PropTypes.array
    })
}

export default UsersList;
