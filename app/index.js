import './index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import AppStore from './stores/AppStore';

import App from './containers/App';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './containers/Users';
import UsersList from './containers/UsersList';
import Profile from './containers/Profile';
import NotFound from './pages/NotFound';
import Blog from './containers/Blog';
import PostsList from './containers/PostsList';
import PostCreate from './pages/PostCreate';
import PostUpdate from './containers/PostUpdate';
import PostView from './containers/PostView';
import Login from './pages/Login';
import Signup from './pages/Signup';

let requireAuth = function(nextState, replace) {
  if (!AppStore.getState().isLoggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

let requireNotAuth = function(nextState, replace) {
  if (AppStore.getState().isLoggedIn) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="login" component={Login} onEnter={requireNotAuth}/>
        <Route path="signup" component={Signup} onEnter={requireNotAuth}/>
        <Route path="users" component={Users}>
            <IndexRoute component={UsersList}/>
            <Route path="/profile/:id" component={Profile} onEnter={requireAuth}/>
            <Route path="/profile" component={Profile}/>
        </Route>
        <Route path="blog" component={Blog}>
            <IndexRoute component={PostsList}/>
            <Route path="create" component={PostCreate} onEnter={requireAuth}/>
            <Route path="update/:id" component={PostUpdate} onEnter={requireAuth}/>
            <Route path=":id" component={PostView}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
</Router>, document.querySelector('#app'));
