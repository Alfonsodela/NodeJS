const express = require("express");

const cochesRouter = express.Router();

const coches = [
  { id: 1, marca: "Ford", modelo: "Focus", annoFabricacion: 2020 },
  { id: 2, marca: "Peugeot", modelo: "207", annoFabricacion: 2011 },
  { id: 3, marca: "Audi", modelo: "A4", annoFabricacion: 2015 },
];

// GET / coches / === / coches
cochesRouter.get("/", (req, res) => {
  const anterioresA = Number(req.query.anterioresA);
  const posterioresA = Number(req.query.posterioresA);
  if (!isNaN(anterioresA) && !isNaN(posterioresA)) {
    const filtrados = coches.filter(coche => coche.annoFabricacion < anterioresA && coche.annoFabricacion > posterioresA)
    return res.status(200).send(filtrados);
  }

  if (!isNaN(anterioresA)) {
    const filtrados = coches.filter(coche => coche.annoFabricacion < anterioresA);
    return res.status(200).send(filtrados);
  }

  if (!isNaN(posterioresA)) {
    const filtrados = coches.filter(coche => coche.annoFabricacion > posterioresA);
    return res.status(200).send(filtrados);
  }

  res.status(200).send(coches);
});

// GET / coches / 2
cochesRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = coches.findIndex((coche) => coche.id === id);
  if (index < 0) {
    return res.status(404).send(`Coche con id ${id} no encontrado`);
  }

  const coche = coches[index];
  return res.status(200).send(coche);
});

// POST / coches / 2
cochesRouter.post("/", (req, res) => {
  res.status(405).send("Method GET not implemented");
});

cochesRouter.put("/:id", (req, res) => {
  res.status(405).send("Method PUT not implemented");
});

cochesRouter.delete("/:id", (req, res) => {
  res.status(405).send("Method DELETED not implemented");
});

module.exports = cochesRouter;
