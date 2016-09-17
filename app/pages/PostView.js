import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

import BlogActions from '../actions/BlogActions';

class PostView extends Component {
    componentDidMount() {
        //init blog posts
        BlogActions.fetchPosts();
    }

    render() {
        let { post } = this.props;
        let { isLoggedIn, currentUser } = this.props.App;
        //console.log(post);

        let updatePost;
        if (isLoggedIn, currentUser._id === post.userId) {
            updatePost = <Link className="ui small button" to={`/blog/update/${post._id}`}>update post</Link>;
        }

        return (
            <div className="ui main container">
                <h1 className="ui header text center">{post.title}</h1>
                {updatePost}
                <p>{post.content}</p>
            </div>
        )
    }
}

PostView.defaultProps = {
    post: {}
};

PostView.propTypes = {
    post: PropTypes.object,
    App: PropTypes.shape({
        isLoggedIn: PropTypes.bool.isRequired,
        currentUser: PropTypes.object.isRequired
    })
};

export default PostView;
