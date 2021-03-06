import React, { PropTypes } from 'react';
import AltContainer from 'alt-container';

import PostViewPage from '../pages/PostView';
import BlogStore from '../stores/BlogStore';
import AppStore from '../stores/AppStore';
import BlogActions from '../actions/BlogActions';

const PostView = ({ params: { id } }) => {
    return (
        <AltContainer
            stores={
                {
                    App: AppStore,
                    post: function () {
                        return {
                          store: BlogStore,
                          value: BlogStore.getPostFor(id)
                        };
                     }
                }
            }
            actions={ { BlogActions } }
        >
            <PostViewPage />
        </AltContainer>
    )
};

PostView.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
};

export default PostView;
