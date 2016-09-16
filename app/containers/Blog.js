import React, { PropTypes } from 'react';
import AltContainer from 'alt-container';

import BlogPage from '../Pages/Blog';
import BlogStore from '../Stores/BlogStore';
import BlogActions from '../Actions/BlogActions';

const Blog = () => {
    return (
        <AltContainer
            stores={
                {
                Blog: BlogStore
                }
            }
            actions={ { BlogActions } }
        >
            <BlogPage />
        </AltContainer>
    )
};

export default Blog;
