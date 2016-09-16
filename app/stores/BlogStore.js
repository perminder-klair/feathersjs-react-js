import React from 'react';
import _ from 'underscore';

import alt from '../lib/Alt';
import BlogActions from '../actions/BlogActions';

class BlogStore {
    constructor() {
        this.bindListeners({
            handleFetchPosts: BlogActions.fetchPosts,
            handleBlogFailed: BlogActions.blogFailed,
            handleFetchPosts: BlogActions.fetchPosts,
            handleUpdatePosts: BlogActions.updatePosts,
            handleCreatePost: BlogActions.createPost
        });

        this.state = {
            errorMessage: null,
            posts: []
        };
    }

    handleFetchPosts() {
        //clear posts state
    }

    handleUpdatePosts(posts) {
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

    handleCreatePost() {
        //success
    }

    static getPostFor(_id) {
        let { posts } = this.state;

        return _.findWhere(posts, {_id});
    }
}

module.exports = alt.createStore(BlogStore, 'BlogStore');
