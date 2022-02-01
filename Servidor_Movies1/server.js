const express = require("express");
const db = require('./db');


const PORT = 3000;

const server = express();

server.get("/", (req, res) => {
  res.status(200).send(movies);
});

server.get("/:id", (_req, res) => {
    const id = Number(_req.params.id)
    res.status(200).send(movies[id])
})

server.get("/:year", (_req, res) => {
    const year = Number(_req.params.year)
    let newArr = [];
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].year === year){
            newArr.push(movies[i])
        }       
    }
    res.status(200).send(newArr)
})


db.connectDB().then(() => {
  console.log('Conectado a base de datos Mongo');
  server.listen(PORT, () => {
      console.log(`Iniciado servidor express en puerto ${PORT}`);
  });
});
