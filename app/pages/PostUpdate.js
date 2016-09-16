import React, { Component, PropTypes } from 'react';
import alertify from 'alertify.js';

import PostForm from '../forms/PostForm';

class PostUpdate extends Component {
    handleSubmit(doc) {
        console.log('post', doc);
        alertify.success('Post updated successfully!');
    }

    render() {
        return (
            <div className="ui main container">
                <h1 className="ui header">Update post</h1>
                <PostForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

PostUpdate.propTypes = {
    Post: PropTypes.object
}

export default PostUpdate;
