const mongoose = require("mongoose");
const db = require("../db"); // Conectando con Mongo
const Coche = require("../models/Coche");

const coches = [
  { marca: "Ford", modelo: "Focus", annoFabricacion: 2020 },
  { marca: "Peugeot", modelo: "207", annoFabricacion: 2015 },
  { marca: "Audi", modelo: "A4", annoFabricacion: 2011 },
  { marca: "Fiat", modelo: "Stilo", annoFabricacion: 2011 }
];

const cochesDocuments = coches.map(coche => new Coche(coche)); // Documento que entiende Mongo

db.connectDB() // Invocamos la conexión con Mongo
// Ver si hay coches y eliminarlos
.then(async () => {
    const todosLosCoches = await Coche.find();
    if (todosLosCoches.length > 0) {
        await Coche.collection.drop(); // cargaremos no uno a uno sino la colección
    }
})
.catch(err => console.error(`Error eliminado inforación de la DB: ${err}`))
// Añadir documentos de coches a la base de datos
.then(async () => {
    await Coche.insertMany(cochesDocuments)
})
.catch(err => console.error (`Error creando cocumentos en DB: ${err}`))
// Cerrar la conexión
.finally(() => mongoose.disconnect()); // Desconexión
