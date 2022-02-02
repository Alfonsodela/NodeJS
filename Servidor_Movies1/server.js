const express = require("express");
const moviesRouter = require('./router/movies.router')
const db = require('./db');


const PORT = 3000;

const server = express();

// Añadimos los middlewares para poder leer los body
server.use(express.json());
server.use(express.urlencoded({ extended: false }));


server.use('/movies', moviesRouter);

server.get("/", (req, res) => {
    res.status(200).send('Server is up & running');
});

server.use('*', (req, res, next) => {
    const error = new Error('Ruta no encontrada');
    error.status = 404;
    return next(error);
});

server.use((err, _req, res, _next) => {
    return res
        .status(err.status || 500)
        .json(err.message || 'Error inesperado en servidor');
});

// server.get("/", (req, res) => {
//   res.status(200).send(movies);
// });

// server.get("/:id", (_req, res) => {
    // const id = Number(_req.params.id)
    // res.status(200).send(movies[id])
// })
// 
// server.get("/:year", (_req, res) => {
    // const year = Number(_req.params.year)
    // let newArr = [];
    // for (let i = 0; i < movies.length; i++) {
        // if (movies[i].year === year){
            // newArr.push(movies[i])
        // }       
    // }
    // res.status(200).send(newArr)
// })


db.connectDB().then(() => {
  console.log('Conectado a base de datos Mongo');
  server.listen(PORT, () => {
      console.log(`Iniciado servidor express en puerto ${PORT}`);
  });
});
