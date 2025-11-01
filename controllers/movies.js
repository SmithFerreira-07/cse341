const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAllMovies = async (req, res) => {
    const result = await mongodb.getDb().collection('movies').find();
    result.toArray().then((movies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(movies);
    });
};

const getSingleMovie = async (req, res) => {
    const movieId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('movies').find({_id: movieId});
    result.toArray().then((movies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(movies[0]);
    });
};

module.exports = {
    getAllMovies,
    getSingleMovie
};
