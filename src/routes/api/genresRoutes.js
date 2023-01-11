const express = require('express');
const router = express.Router();
const { list, getByName, getById } = require('../controllers/api/genresController');

router
    .get('/', list)
    .get('/name/:name?', getByName)
    .get('/:id', getById) 

module.exports = router;