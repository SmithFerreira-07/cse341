const Comment = require('../models/comment');

const getFiveComments = async (req, res) => {
    try {
        const comments = await Comment.aggregate([{ $sample: { size: 5 } }]);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingleComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            res.status(404).json({ message: 'Comment not found' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(comment);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createComment = async (req, res) => {
    const comment = new Comment({
        movie_id: req.body.movie_id,
        name: req.body.name,
        email: req.body.email,
        text: req.body.text,
        date: req.body.date
    });

    try {
        const newComment = await comment.save();
        res.status(201).json(newComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        if (req.body.movie_id != null) comment.movie_id = req.body.movie_id;
        if (req.body.name != null) comment.name = req.body.name;
        if (req.body.email != null) comment.email = req.body.email;
        if (req.body.text != null) comment.text = req.body.text;
        if (req.body.date != null) comment.date = req.body.date;

        const updatedComment = await comment.save();
        res.status(200).json(updatedComment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteComment = async (req, res) => {
    try {
        const result = await Comment.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json({ message: 'Comment deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getFiveComments,
    getSingleComment,
    createComment,
    updateComment,
    deleteComment
};