const express = require("express");

const PORT = 3000;

const movies = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

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



server.listen(PORT, () => {
  console.log(`Iniciando servidor express en ${PORT}`);
});
