import React, { Component, PropTypes } from 'react';
import alertify from 'alertify.js';
import _ from 'underscore';

import BlogActions from '../actions/BlogActions';

import PostForm from '../forms/PostForm';

class PostUpdate extends Component {
    componentDidMount() {
        //init blog posts
        BlogActions.fetchPosts();
    }

    handleSubmit = (doc) => {
        let { post } = this.props;
        //console.log('post', post);

        BlogActions.modifyPost(post._id, doc, result => {
            if (result) {
                alertify.success('Post updated successfully!');
            }
        });
    }

    render() {
        let { post } = this.props;
        //console.log('post', post);

        if (_.isEmpty(post)) {
            return <div>loading...</div>;
        }

        return (
            <div className="ui main container">
                <h1 className="ui header">Update post</h1>
                <PostForm post={post} handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        )
    }
}

PostUpdate.defaultProps = {
    post: {}
};

PostUpdate.propTypes = {
    post: PropTypes.object
};

export default PostUpdate;
