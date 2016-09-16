import React, { Component, PropTypes } from 'react';

import BlogActions from '../actions/BlogActions';

class PostView extends Component {
    componentDidMount() {
        //init blog posts
        BlogActions.fetchPosts();
    }

    render() {
        let { post } = this.props;

        return (
            <div className="ui main container">
                <h1 className="ui header text center">{post.title}</h1>
            </div>
        )
    }
}

PostView.defaultProps = {
    post: {}
};

PostView.propTypes = {
    post: PropTypes.object
};

export default PostView;
