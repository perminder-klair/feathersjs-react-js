import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class PostItem extends Component {
    render() {
        let { post } = this.props;

        return (
            <div className="item">
                <div className="content">
                    <Link className="ui small button" to={`/blog/${post.id}`}>
                        {post.title}
                    </Link>
                </div>
            </div>
        )
    }
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;
