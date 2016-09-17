import alt from '../lib/Alt';
import Feathers from '../lib/Feathers';

class UsersActions {
    fetchUsers() {
        const usersService = Feathers.service('users');

        return (dispatch) => {
            dispatch();
            // Find the last 10 posts
            usersService.find({
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 10
                }
            }).then(page => {
                //console.log('page', page);
                //console.log('users action', page.data);
                this.updateUsers(page.data);
            }).catch((err) => {
                console.log('err', err);
                this.usersFailed(err);
            });

            // Listen to newly created messages
            usersService.on('created', user => {
                //console.log('user', user
                this.updateUsers(user);
            });
        };
    }

    updateUsers(users) {
        return users;
    }

    usersFailed(errorMessage) {
        return errorMessage;
    }
}

module.exports = alt.createActions(UsersActions);
