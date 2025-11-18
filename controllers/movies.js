const Movie = require('../models/movie');

const getFiveMovies = async (req, res) => {
    try {
        const movies = await Movie.aggregate([{ $sample: { size: 5 } }]);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getSingleMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            res.status(404).json({ message: 'Movie not found' });
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(movie);
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createMovie = async (req, res) => {
    const movie = new Movie({
        plot: req.body.plot,
        genres: req.body.genres,
        runtime: req.body.runtime,
        cast: req.body.cast,
        poster: req.body.poster,
        title: req.body.title,
        fullplot: req.body.fullplot,
        languages: req.body.languages,
        released: req.body.released,
        directors: req.body.directors,
        rated: req.body.rated,
        awards: req.body.awards,
        lastupdated: req.body.lastupdated,
        year: req.body.year,
        imdb: req.body.imdb,
        countries: req.body.countries,
        type: req.body.type,
        tomatoes: req.body.tomatoes,
        num_mflix_comments: req.body.num_mflix_comments
    });

    try {
        const newMovie = await movie.save();
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        if (req.body.plot != null) movie.plot = req.body.plot;
        if (req.body.genres != null) movie.genres = req.body.genres;
        if (req.body.runtime != null) movie.runtime = req.body.runtime;
        if (req.body.cast != null) movie.cast = req.body.cast;
        if (req.body.poster != null) movie.poster = req.body.poster;
        if (req.body.title != null) movie.title = req.body.title;
        if (req.body.fullplot != null) movie.fullplot = req.body.fullplot;
        if (req.body.languages != null) movie.languages = req.body.languages;
        if (req.body.released != null) movie.released = req.body.released;
        if (req.body.directors != null) movie.directors = req.body.directors;
        if (req.body.rated != null) movie.rated = req.body.rated;
        if (req.body.awards != null) movie.awards = req.body.awards;
        if (req.body.lastupdated != null) movie.lastupdated = req.body.lastupdated;
        if (req.body.year != null) movie.year = req.body.year;
        if (req.body.imdb != null) movie.imdb = req.body.imdb;
        if (req.body.countries != null) movie.countries = req.body.countries;
        if (req.body.type != null) movie.type = req.body.type;
        if (req.body.tomatoes != null) movie.tomatoes = req.body.tomatoes;
        if (req.body.num_mflix_comments != null) movie.num_mflix_comments = req.body.num_mflix_comments;

        const updatedMovie = await movie.save();
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const result = await Movie.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.status(200).json({ message: 'Movie deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getFiveMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    deleteMovie
};
