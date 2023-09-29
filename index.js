const express = require('express');
const layouts = require('express-ejs-layouts');
const path = require('path');
const db = require('./db/db');
const passport = require('passport');
const localStrategy = require('./conflg/localStrategy');
const parser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

// Passport serialization and deserialization
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

const PORT = process.env.ERS_PORT || 3000;
const app = express();

// Middleware setup
app.use(express.json());
app.use(parser());
app.use(express.urlencoded({ extended: true }));

// Passport setup
app.use(session({
    name: 'ERS',
    secret: 7278631011,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://empsys:Oishik9008@cluster0.m9w6nhi.mongodb.net/?retryWrites=true&w=majority', // Replace 'your-database-name' with your actual database name
        collectionName: 'session',
        autoRemove: 'native'
    })
}));

// ...







app.use(passport.initialize());
app.use(passport.session());

// Static files and view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.use(layouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route setup
app.use('/', require('./routes/index'));

// Server start
app.listen(PORT, function(err) {
  if (err) {
    console.log("Oops! Server is caught following Errors: " + err);
  } else {
    console.log('Your server is been fired up on the port: ' + PORT);
  }
});
