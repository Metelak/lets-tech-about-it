const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//     Comment.findAll()
//       .then(dbCommentData => res.json(dbCommentData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

// router.post('/', withAuth, async (req, res) => {
//     try {
//         const newComment = await Comment.create  
//     } catch (error) {
        
//     }
  
  router.post('/', withAuth, (req, res) => {
      // check the session
    if (req.session) {
      Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
        // use the id from the session
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    }
  });
  
//   router.delete('/:id', withAuth, (req, res) => {
//     if (req.session) {
//       Comment.destroy({
//         where: {
//           id: req.params.id
//         }
//       })
//         .then(dbCommentData => {
//           if (!dbCommentData) {
//             res.status(404).json({ message: 'No comment found with this id!' });
//             return;
//           }
//           res.json(dbCommentData);
//         })
//         .catch(err => {
//           console.log(err);
//           res.status(500).json(err);
//         });
//     }
//   });

module.exports = router;