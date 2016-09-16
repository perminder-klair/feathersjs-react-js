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
            handleCreatePost: BlogActions.createPost,
            handleUpdatePost: BlogActions.updatePost
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

    handleUpdatePost(post) {
        let { posts } = this.state;

        //find event from "events" array and update it
        let index = _.findIndex(posts, {_id: post._id});

        if (index === -1) {
            //event not found
            posts.push(post);
        } else {
            //event found update it
            posts[index] = post;
        }

        this.setState({posts});
    }

    static getPostFor(_id) {
        let { posts } = this.state;

        return _.findWhere(posts, {_id});
    }
}

module.exports = alt.createStore(BlogStore, 'BlogStore');
