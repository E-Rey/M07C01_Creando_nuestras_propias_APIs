const express = require('express');
const router = express.Router();
const { list, newest, recommended, getById, create, update, destroy } = require('../controllers/api/moviesController');

router
    .get('/', list)
    .get('/new', newest)
    .get('/recommended', recommended)
    .get('/:id', getById)
    .post('/', create)
    .patch('/:id', update)
    .delete('/:id', destroy)

module.exports = router;