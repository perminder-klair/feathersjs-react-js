import React, { Component } from 'react';

import BlogActions from '../actions/BlogActions';

class Blog extends Component {
    componentDidMount() {
        //init blog posts
        BlogActions.fetchPosts();
    }

    render() {
        return (
            <div className="ui main container">
                <h1 className="ui header text center">Blog</h1>
                <p>list here</p>
            </div>
        )
    }
}

export default Blog;
