import React, { PropTypes } from 'react';
import AltContainer from 'alt-container';

import PostUpdatePage from '../pages/PostUpdate';
import BlogStore from '../stores/BlogStore';
import BlogActions from '../actions/BlogActions';

const PostUpdate = ({ params: { id } }) => {
    return (
        <AltContainer
            stores={
                {
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
            <PostUpdatePage />
        </AltContainer>
    )
};

PostUpdate.propTypes = {
    params: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
};

export default PostUpdate;
