const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    plot: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    runtime: {
        type: Number,
        required: true
    },
    cast: {
        type: [String],
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    fullplot: {
        type: String,
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    released: {
        type: Date,
        required: true
    },
    directors: {
        type: [String],
        required: true
    },
    rated: {
        type: String,
        required: true
    },
    awards: {
        wins: Number,
        nominations: Number,
        text: String
    },
    lastupdated: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    imdb: {
        rating: Number,
        votes: Number,
        id: Number
    },
    countries: {
        type: [String],
        required: true
    },
    type: {
        type: String,
        required: true
    },
    tomatoes: {
        viewer: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        fresh: Number,
        critic: {
            rating: Number,
            numReviews: Number,
            meter: Number
        },
        rotten: Number,
        lastUpdated: Date
    },
    num_mflix_comments: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Movie', movieSchema);
