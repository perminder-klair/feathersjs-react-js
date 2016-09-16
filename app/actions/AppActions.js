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

    checkUser() {
        Feathers.authenticate().then(() => {
          console.log('user logged in');
        }).catch(error => {
          console.log('user not logged in', error);
        });
    }
}

module.exports = alt.createActions(AppActions);
