const express = require('express');
const Usuario = require('../models/Usuario');

const usuariosRouter = express.Router();

usuariosRouter.get('/', (req, res, next) => {
    return Usuario.find()
        .then(usuarios => {
            return res.status(200).json(usuarios);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next (error);
        });
});

usuariosRouter.get('/:id', (req, res, next) => {
    const id = req.params.id;
    return Usuario.findById(id).populate('coches')
        .then((usuario) => {
            if (!usuario) {
                const error = new Error('Usuario no encontrado');
                error.satus = 404;
                return next(error);
            }
            return res.status(200).json(usuario);
        })
        .catch(err => {
            const error = new Error(err);
            error.satus = 500;
            return next(error);
        });
});

usuariosRouter.post('/', (req, res, next) => {
    const nuevoUsuario = new Usuario({
        nombre: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        coches: [],
    })
    return nuevoUsuario.save()
        .then(() => {
            return res.status(201).json(nuevoUsuario);
        })
        .catch(err => {
            const error = new Error(err);
            error.satus = 500;
            return next(error);
        });
});

usuariosRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    return Usuario.findByIdAndDelete(id)
        .then(() => {
            return res.status(200).json(`Cliente con id ${id} eliminado`);
        })
        .catch(err => {
            const error = new Error(err);
            error.status = 500;
            return next(error);
        });
});



module.exports = usuariosRouter;