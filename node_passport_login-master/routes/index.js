const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/menu', ensureAuthenticated, (req, res) =>
  res.render('menu', {
    user: req.user
  })
);

module.exports = router;
