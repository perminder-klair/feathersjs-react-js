import './index.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './containers/App';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import PostView from './pages/PostView';

render(
  <Router history={browserHistory}>
  <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="users" component={Users}>
          <Route path="/profile/:userId" component={Profile}/>
      </Route>
      <Route path="blog" component={Blog}>
                <Route path=":id" component={PostView} />
            </Route>
    <Route path="*" component={NotFound}/>
  </Route>
</Router>, document.querySelector('#app'));
