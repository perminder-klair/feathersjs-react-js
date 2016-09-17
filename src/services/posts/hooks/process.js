'use strict';

// src/services/message/hooks/process.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

module.exports = function(options) {
    return function(hook) {
        // The authenticated user
        const user = hook.params.user;
        // The actual message text
        const title = hook.data.title
            // Messages can't be longer than 400 characters
            .substring(0, 400)
            // Do some basic HTML escaping
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');


        const content = hook.data.content;

        // Override the original data
        hook.data = {
            title,
            content,
            // Set the user id
            userId: user._id,
            // Add the current time via `getTime`
            createdAt: new Date().getTime()
        };
    };
};
