const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/movies');
const { authenticateJWT } = require('../middleware/auth');

router.get('/', authenticateJWT, moviesController.getFiveMovies);
router.get('/:id', authenticateJWT, moviesController.getSingleMovie);
router.post('/', authenticateJWT, moviesController.createMovie);
router.put('/:id', authenticateJWT, moviesController.updateMovie);
router.delete('/:id', authenticateJWT, moviesController.deleteMovie);

module.exports = router;
