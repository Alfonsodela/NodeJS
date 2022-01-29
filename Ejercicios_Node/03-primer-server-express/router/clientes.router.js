const express = require("express");
const Cliente = require("../models/Cliente");

const clienteRouter = express.Router();

clientesRouter.get('/', () => {});


clientesRouter.get('/', () => {});


clientesRouter.post('/:id', (req, res, next) => {
    const nuevoCliente = new Cliente({
        nombre: req.body.nombre,

    })
    nuevoCliente.save()
        .then(() => {
        return res.status(201).json(nuevocoche);
      })
      .catch((err) => {
        const error = new Error(err);
        error.status = 500;
        return next(error);
      });
});
clientesRouter.get('/', () => {});
clientesRouter.get('/', () => {});


module.exports = clientesRouter;