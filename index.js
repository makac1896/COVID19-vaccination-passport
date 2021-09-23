require('dotenv').config()

const express = require('express')
const passport = require('passport');
const path = require('path')
const flash = require('connect-flash');
const session = require('express-session');

const app = express()

// Passport Config
require('./config/passport')(passport);

// EJS
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));


// Express session
app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: {_expires: 21600000},
      resave: true,
      saveUninitialized: true
    })
  );
  
  // Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());
  
  // Connect flash
  app.use(flash());
  
  // Global variables
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });

// connecting to the database
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// connecting to the vaccine router
const vaccinesRouter = require('./routes/vaccines')
app.use('/vaccines', vaccinesRouter)
//\\//\\//\\//\\//\\//\\//\\//\\
// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users'));

app.listen(process.env.PORT, () => console.log('Server Started'))
// LesedixZenith 2021##