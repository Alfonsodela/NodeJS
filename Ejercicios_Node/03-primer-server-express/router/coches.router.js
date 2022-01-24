const express = require("express");

const cochesRouter = express.Router();

// GET / coches / === / coches
cochesRouter.get('/', (req, res) => {
  const coches = [
    { id: 1, marca: "Ford", modelo: "Focus", annoFabricacion: 2020 },
    { id: 2, marca: "Peugeot", modelo: "207", annoFabricacion: 2011 },
    { id: 3, marca: "Audi", modelo: "A4", annoFabricacion: 2015 },
  ];
  res.status(200).send(coches);
});

// GET / coches / 2
cochesRouter.post('/', (req, res) => {
  res.status(405).send("Method GET not implemented");
});

cochesRouter.put('/:id', (req, res) => {
  res.status(405).send("Method PUT not implemented");
});

cochesRouter.delete('/', (req, res) => {
  res.status(405).send("Method DELETED not implemented");
});

module.exports = cochesRouter;
