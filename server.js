const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongodb = require('./data/database');
require('dotenv').config();
require('./config/passport');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(session({ secret: 'your_session_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
});
