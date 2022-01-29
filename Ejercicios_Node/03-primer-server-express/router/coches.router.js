const express = require("express");
const Coche = require("../models/Coche");
const cochesRouter = express.Router();

const coches = [
  { id: 1, marca: "Ford", modelo: "Focus", annoFabricacion: 2020 },
  { id: 2, marca: "Peugeot", modelo: "207", annoFabricacion: 2011 },
  { id: 3, marca: "Audi", modelo: "A4", annoFabricacion: 2015 },
];

// GET / coches / === / coches
cochesRouter.get("/", (req, res) => {
  // const anterioresA = Number(req.query.anterioresA);
  // const posterioresA = Number(req.query.posterioresA);
  // if (!isNaN(anterioresA) && !isNaN(posterioresA)) {
  // const filtrados = coches.filter(coche => coche.annoFabricacion < anterioresA && coche.annoFabricacion > posterioresA)
  // return res.status(200).send(filtrados);
  // }
  //
  // if (!isNaN(anterioresA)) {
  // const filtrados = coches.filter(coche => coche.annoFabricacion < anterioresA);
  // return res.status(200).send(filtrados);
  // }
  //
  // if (!isNaN(posterioresA)) {
  // const filtrados = coches.filter(coche => coche.annoFabricacion > posterioresA);
  // return res.status(200).send(filtrados);
  // }
  //
  // res.status(200).send(coches);
  Coche.find()
    .then((cochesLeidos) => {
      return res.status(200).json(cochesLeidos);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});


// GET / coches / 2
cochesRouter.get("/:id", (req, res, next) => {
  // const id = Number(req.params.id);
  // const index = coches.findIndex((coche) => coche.id === id);
  // if (index < 0) {
  // const error = new Error('Coche con id ${id} no encontrado');
  // error.status = 404;
  // return next(error);
  // }

  // const coche = coches[index];
  // return res.status(200).send(coche);

  const id = req.params.id;
  return Coche.findById(id)
    .then((coche) => {
      if (!coche) {
        const error = new Error("Coche no encontrado");
        error.status = 404;
        return next(error);
      }
      return res.status(200).json(coche);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});


// POST / coches / 2
cochesRouter.post("/", (req, res, next) => {
  console.log('Body recibido, req.body');
  const nuevocoche = new Coche ({
    marca: req.body.marca,
    modelo: req.body.modelo,
    annoFabricacion: req.body.annoFabricacion,
  })

  return nuevocoche.save()
    .then(() => {
      return res.status(201).json(nuevocoche);
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});


//PUT
cochesRouter.put("/:id", (req, res, next) => {
  const id = req.params.id //Recuperamos el id de la url
        const cocheEditado = new Coche(req.body); //instanciamos un nuevo Character con la información del body
        cocheEditado._id = id //Reasignamos el id para sobreescribir el documento en la BD
return Coche.findByIdAndUpdate(id, cocheEditado, {/* returnDocument: 'after', */new: true})
.then(cocheActualizado => {
            return res.status(200).json(cocheActualizado)
          }) //Este personaje que devolvemos es el anterior a su modificación
          .catch (err => {
          const error = new Error(err);
          error.status = 500;
          return next(error);
        });
  
});


//DELETE
cochesRouter.delete("/:id", (req, res, next) => {
  const id = req.params.id; // seleccionar el elemento
  return Coche.findByIdAndDelete(id)
    .then(() => {
      return res.status(200).json("Coche con id ${id} eliminado");
    })
    .catch((err) => {
      const error = new Error(err);
      error.status = 500;
      return next(error);
    });
});

module.exports = cochesRouter;
