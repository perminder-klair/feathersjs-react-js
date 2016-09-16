import React from 'react';
import _ from 'underscore';

import alt from '../Lib/Alt';
import BlogActions from '../Actions/BlogActions';

class BlogStore {
    constructor() {
        this.bindListeners({
            handleFetchPosts: BlogActions.fetchPosts,
            handleBlogFailed: BlogActions.blogFailed
        });

        this.state = {
            errorMessage: null,
            posts: []
        };
    }

    handleFetchPosts(posts) {
        this.setState({
            posts,
            errorMessage: null
        });
    }

    handleBlogFailed(errorMessage) {
        console.error('blog failed', errorMessage);

        this.setState({
            errorMessage
        });
    }

    static getPostFor(postId) {
        let { posts } = this.state;

        return _.findWhere(posts, {id: postId});
    }
}

module.exports = alt.createStore(BlogStore, 'BlogStore');
