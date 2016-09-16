import './index.scss';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './containers/App';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Blog from './containers/Blog';
import PostsList from './containers/PostsList';
import PostCreate from './pages/PostCreate';
import PostUpdate from './containers/PostUpdate';
import PostView from './containers/PostView';
import Login from './pages/Login';
import Signup from './pages/Signup';

render(
    <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard}/>
        <Route path="about" component={About}/>
        <Route path="contact" component={Contact}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="profile" component={Profile}/>
        <Route path="users" component={Users}>
            <Route path="/profile/:userId" component={Profile}/>
        </Route>
        <Route path="blog" component={Blog}>
            <IndexRoute component={PostsList}/>
            <Route path="create" component={PostCreate}/>
            <Route path="update/:id" component={PostUpdate}/>
            <Route path=":id" component={PostView}/>
        </Route>
        <Route path="*" component={NotFound}/>
    </Route>
</Router>, document.querySelector('#app'));
