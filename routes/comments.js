const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');
const { authenticateJWT } = require('../middleware/auth');

router.get('/', authenticateJWT, commentsController.getFiveComments);
router.get('/:id', authenticateJWT, commentsController.getSingleComment);
router.post('/', authenticateJWT, commentsController.createComment);
router.put('/:id', authenticateJWT, commentsController.updateComment);
router.delete('/:id', authenticateJWT, commentsController.deleteComment);

module.exports = router;