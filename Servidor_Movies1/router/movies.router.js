const express = require("express");
const Movie = require("../models/Movie");

const moviesRouter = express.Router();

// 1. Crear un endpoint que devuelva todas las películas.
moviesRouter.get("/", (req, res, next) => {
  //let filter = {};
  return Movie.find()
    .then((movies) => {
      return res.status(200).json(movies);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

// 2. Crear un endpoint que devuelva una película según su **_id**
moviesRouter.get("/:id", (req, res, next) => {
  const id = req.params.id;
  return Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        const error = new Error("Movie not found");
        error.status = 404;
        return next(error);
      }
      return res.status(200).json(movie);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

// Crear un endpoint **get** que devuelva un valor por su titulo.
// Crear un endpoint **get** que devuelva los documentos según su género.
// Crear un endpoint **get** que devuelva las películas que se han estrenado a partir de 2010.

// 2. Crear un método post de Movies para crear una nueva película.
moviesRouter.post('/', (req, res, next) => {
  const newMovie = new Movie({
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    genre: req.body.genre 
  })
  return newMovie.save()
    .then(() => {
      return res.status(201).json(newMovie);
    })
    .catch(err => {
      const error = new Error(err);
      error.satus = 500;
      return next(error);
  });
});

// 3. Crear un método put de Movies para modificar una película.
moviesRouter.put('/:id', (req, res, next) => {
  const id = req.params.id;
  const movieEdit = new Movie (req.body);
  movieEdit._id = id;
  return Movie.findByIdAndUpdate(id, movieEdit, {new: true})
    // const id = req.params.id;
    // return Movie.findByIdAndUpdate(id, { $set: req.body }, { new: true })
      // .then(movieUpdated => {
    .then(movieUpdated => {
      res.status(200).json(movieUpdated);
    })
    .catch(err => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    })
})

// 4. Crear un método delete de Movies para eliminar una película.
moviesRouter.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  return Movie.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json(`Movie with id ${id} delete`);
    })
    .catch(err => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    })
})

module.exports = moviesRouter;
