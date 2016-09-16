import alt from '../lib/Alt';
import Feathers from '../lib/Feathers';

class BlogActions {
  fetchPosts() {
    const postsService = Feathers.service('posts');

    // Find the last 10 messages
    postsService.find({
      query: {
        $sort: {
          createdAt: -1
        },
        $limit: 10
      }
    }).then(page => {
      console.log('messages', page.data.reverse());
    });

    // Listen to newly created messages
    postsService.on('created', message => {
      console.log('message', message);
    });

  }

  blogFailed(errorMessage) {
    return errorMessage;
  }
}

module.exports = alt.createActions(BlogActions);
