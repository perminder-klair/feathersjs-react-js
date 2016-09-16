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
          console.log('posts', page.data.reverse());
          this.updatePosts(page.data.reverse());
        });

        // Listen to newly created messages
        postsService.on('created', posts => {
          console.log('posts', posts);
          this.updatePosts(posts);
        });
    };
  }

  updatePosts(posts) {
      return posts;
  }

  blogFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(BlogActions);
