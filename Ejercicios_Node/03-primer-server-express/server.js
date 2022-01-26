const express = require("express");
const cochesRouter = require('./router/coches.router');

const PORT = 3000;

const server = express();

server.get("/", (req, res) => {
  res.status(200).send("Server is up running");
});

server.use('/coches', cochesRouter);

server.use("/", (req, res) => {
  res.status(404).send("Not found");
  // res.send('Hola Mundo');
});

server.listen(PORT, () => {
  console.log(`Iniciando servidor express en puerto ${PORT}`);
});