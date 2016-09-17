import alt from '../lib/Alt';
import AppActions from '../actions/AppActions';

class AppStore {
    constructor() {
        this.bindListeners({
            handleLoading: [AppActions.addLoading, AppActions.removeLoading, AppActions.clearLoading],
            handleNetwork: AppActions.checkNetwork,
            handleAppFailed: AppActions.appFailed,
            handleCheckUser: AppActions.checkUser,
            handleAuth: [AppActions.login, AppActions.signup],
            handleAuthSuccess: AppActions.authSuccess
        });

        this.state = {
            errorMessage: null,
            loading: true,//on app load make it loading ON
            loadingCount: 0,
            networkOnline: true,
            isLoggedIn: false,
            currentUser: {}
        };
    }

    handleLoading(count) {
        if (count !== 0) {
            count = this.state.loadingCount + count;
        }

        if (count < 0) {
            count = 0;
        }

        //console.log('loading count', count);
        this.setState({
            loadingCount: count,
            loading: count !== 0
        });
    }

    handleNetwork(networkOnline) {
        this.setState({networkOnline});
    }

    handleAppFailed(errorMessage) {
        console.error('app failed', errorMessage);
        this.setState({errorMessage});
    }

    handleCheckUser(user) {
        if (user) {
            this.setState({
                currentUser: user,
                isLoggedIn: true
            });
        } else {
            this.setState({
                isLoggedIn: false
            });
        }
    }

    handleAuth() {
        console.log('auth started');
    }

    handleAuthSuccess() {
        this.setState({isLoggedIn: true});
    }
}

module.exports = alt.createStore(AppStore, 'AppStore');
