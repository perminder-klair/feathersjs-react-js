import React, {PropTypes} from 'react';
import AltContainer from 'alt-container';

import PostsListPage from '../pages/PostsList';
import BlogStore from '../stores/BlogStore';
import BlogActions from '../actions/BlogActions';

const PostsList = () => (
    <AltContainer stores={{
        Blog: BlogStore
    }} actions={{
        BlogActions
    }}>
        <PostsListPage />
    </AltContainer>
)

export default PostsList;
