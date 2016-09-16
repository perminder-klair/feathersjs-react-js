import React, { Component } from 'react';
import alertify from 'alertify.js';
import { browserHistory } from 'react-router';

import BlogActions from '../actions/BlogActions';

import PostForm from '../forms/PostForm';

class PostCreate extends Component {
    handleSubmit(doc) {
        console.log('post', doc);
        BlogActions.createPost(doc, result => {
            alertify.success('Post created successfully!');
            browserHistory.push(`/blog/${result._id}`);
        });
    }

    render() {
        return (
            <div className="ui main container">
                <h1 className="ui header">Create post</h1>
                <PostForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default PostCreate;
