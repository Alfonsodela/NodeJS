const express = require("express");
const cochesRouter = require("./router/coches.router");
const db = require("./db");

const PORT = 3000;

const server = express();

server.get("/", (req, res) => {
  res.status(200).send("Server is up running");
});

server.use("/coches", cochesRouter);

server.use("/", (req, res) => {
  res.status(404).send("Not found");
  // res.send('Hola Mundo');
});

// Control de errores de express
server.use((err, _req, res, next) => {
  return res
    .status(err.status || 500)
    .json(err.message || 'Erro inesperado en servidor');
});

db.connectDB().then(() => {
  console.log('Conectado a base de datos Mongo');
  server.listen(PORT, () => {
    console.log(`Iniciando servidor express en puerto ${PORT}`);
  });
});
