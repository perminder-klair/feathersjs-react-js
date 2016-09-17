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
            Feathers.authenticate().then((result) => {
                console.log('user logged in');
                //console.log(result.data);
                dispatch(result.data);
            }).catch(error => {
                console.log('user not logged in', error);
                dispatch(false);
            });
        }
    }

    authSuccess() {
        return true;
    }

    login({
        email,
        password
    }) {
        return (dispatch) => {
            dispatch();
            Feathers.authenticate({
                type: 'local',
                'email': email,
                'password': password
            }).then((result) => {
                console.log('Authenticated!', Feathers.get('token'));
                this.authSuccess();
            }).catch((error) => {
                console.error('Error authenticating!', error);
                this.appFailed(err);
            });
        }
    }

    signup({
        email,
        password
    }) {
        const usersService = Feathers.service('users');
        return (dispatch) => {
            dispatch();
            usersService.create({
                email,
                password
            }).then((result) => {
                this.authSuccess();
                this.login({
                    email,
                    password
                });
            }).catch((err) => {
                console.log('err', err);
                this.appFailed(err);
            });
        }
    }
}

module.exports = alt.createActions(AppActions);
