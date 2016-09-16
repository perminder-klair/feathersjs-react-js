import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import BlogActions from '../actions/BlogActions';

import PostItem from '../components/PostItem';

class PostsList extends Component {
    componentDidMount() {
        //init blog posts
        BlogActions.fetchPosts();
    }

    render() {
        let { posts } = this.props.Blog;

        return (
            <div className="ui main container">
                <h1 className="ui header">Blog</h1>
                <Link className="ui small button" to="/blog/create">Create post</Link>

                {posts.length === 0
                    ? <div className="ui message">
                            <div className="header">
                                No posts found.
                            </div>
                        </div>
                    : <div className="ui items">
                        {posts.map(post => <PostItem key={post._id} link={post}/>)}
                    </div>
}
            </div>
        )
    }
}

PostsList.propTypes = {
    Blog: PropTypes.shape({
        posts: PropTypes.array
    })
}

export default PostsList;
