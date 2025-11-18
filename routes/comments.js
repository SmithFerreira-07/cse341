const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');

router.get('/', commentsController.getFiveComments);
router.get('/:id', commentsController.getSingleComment);
router.post('/', commentsController.createComment);
router.put('/:id', commentsController.updateComment);
router.delete('/:id', commentsController.deleteComment);

module.exports = router;