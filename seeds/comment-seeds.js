const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This brings out my inner nerd!',
        user_id: 1, 
        post_id: 1
    },
    {
        comment_text: 'Cant wait to start a career in coding!',
        user_id: 2, 
        post_id: 4
    },
    {
        comment_text: 'Wish I knew these tips from the beginning!',
        user_id: 1, 
        post_id: 2
    },
    {
        comment_text: 'Best tips Ive found so far!',
        user_id: 3, 
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;