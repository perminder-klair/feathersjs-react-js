import React, { Component } from 'react';
import alertify from 'alertify.js';

import PostForm from '../forms/PostForm';

class PostCreate extends Component {
    handleSubmit(doc) {
        console.log('post', doc);
        alertify.success('Post created successfully!');
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Create post</h1>
                <PostForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default PostCreate;
