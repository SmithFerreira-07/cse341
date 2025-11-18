const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.use('/movies', require('./movies'));
router.use('/comments', require('./comments'));
router.use('/api-docs', require('./swagger'));

module.exports = router;
