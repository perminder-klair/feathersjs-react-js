import alt from '../lib/Alt';
import Feathers from '../lib/Feathers';

class AppActions {
    addLoading() {
        return 1;
    }

    removeLoading() {
        return -1;
    }

    clearLoading() {
        return 0;
    }

    appFailed(errorMessage) {
        return errorMessage;
    }

    checkNetwork() {
        return true;
    }

    checkUser() {
        return (dispatch) => {
            Feathers.authenticate().then(() => {
                console.log('user logged in');
                dispatch(true);
            }).catch(error => {
                console.log('user not logged in', error);
                dispatch(false);
            });
        }
    }

    login({email, password}) {
        Feathers.authenticate({
            type: 'local',
            'email': email,
            'password': password
        }).then(function(result) {
            console.log('Authenticated!', app.get('token'));
        }).catch(function(error) {
            console.error('Error authenticating!', error);
        });
    }
}

module.exports = alt.createActions(AppActions);
