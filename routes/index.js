const express = require('express');
const router = express.Router();
const moviesController = require('../app/moviesController');

router.get('/movies', moviesController.getAll);
router.get('/search', moviesController.search);

module.exports = router;