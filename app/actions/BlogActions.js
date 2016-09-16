import alt from '../lib/Alt';
import Feathers from '../lib/Feathers';

class BlogActions {
    fetchPosts() {
        const postsService = Feathers.service('posts');

        return (dispatch) => {
            dispatch();
            // Find the last 10 posts
            postsService.find({
                query: {
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 10
                }
            }).then(page => {
                //console.log('page', page);
                //console.log('posts action', page.data);
                this.updatePosts(page.data);
            }).catch((err) => {
                console.log('err', err);
                this.blogFailed(err);
            });

            // Listen to newly created messages
            postsService.on('created', post => {
                //console.log('post', post);
                this.updatePost(post);
            });
        };
    }

    modifyPost(postId, doc, callback) {
        // Get the posts service
        const postsService = Feathers.service('posts');
        return (dispatch) => {
            dispatch();
            // update post with the text from the input field
            postsService.update(postId, doc).then((result) => {
                //console.log('post updated!!!', result);
                callback(result);
            }).catch((err) => {
                console.log('err', err);
                callback(false);
                this.blogFailed(err);
            });
        }
    }

    updatePosts(posts) {
        return posts;
    }

    updatePost(post) {
        return post;
    }

    blogFailed(errorMessage) {
        return errorMessage;
    }

    createPost(doc, callback) {
        // Get the posts service
        const postsService = Feathers.service('posts');
        return (dispatch) => {
            dispatch();
            // Create a new post with the text from the input field
            postsService.create(doc).then((result) => {
                //console.log('post created!!!', result);
                callback(result);
            }).catch((err) => {
                console.log('err', err);
                callback(false);
                this.blogFailed(err);
            });
        }
    }
}

module.exports = alt.createActions(BlogActions);
