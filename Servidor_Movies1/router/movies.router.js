const express = require('express');
const Movie = require('../models/Movie');


const moviesRouter = express.Router();

// 1. Crear un endpoint **get** que devuelva todas las películas.

moviesRouter.get('/', (req, res, next) => {
    let filter = {}
   return Movie.find(filter)
    .then(moviesRead => {
        return res.status(200).json(moviesRead);
    })
    .catch(err => {
        const error = new Error(err);
        error.status = 500;
        return next(error)
    });   
});

moviesRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return Movie.findById(id)
        .then(movie => {
            if(!movie) {
                const error = new Error('Movie not found');
                error.status = 404;
                return next(error);
            }
            return res.status(200).json(movie);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        })
})

// 2. Crear un endpoint **get** que devuelva una película según su **_id**
// 3. Crear un endpoint **get** que devuelva un valor por su titulo.
// 4. Crear un endpoint **get** que devuelva los documentos según su género.
// 5. Crear un endpoint **get** que devuelva las películas que se han estrenado a partir de 2010.

module.exports = moviesRouter;