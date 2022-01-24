const fs = require('fs');

const archivo = './coches.json';

function anadirCoche(marca, modelo, annoFabricacion) {
    // 1. Leer el fichero
    fs.readFile(archivo, (errorLectura, datosLeidos) => {
        if (err) {
            console.error('Error al leer fichero: ', errorLectura)
            return
        }
        const coches = JSON.parse(datosLeidos);
    })


    // 2. Añadir al listado de coches leido el coche que recibimos por argumentos
    const cocheAAnadir = {marca, modelo, annoFabricacion, id: coches[coches.length - 1].id + 1}
    coches.push(cocheAAnadir);


    // 3. Escribir/Persisitir el fichero
    fs.writeFile(archivo, JSON.stringify(coches), (errorEscritura) => {
        if (error) {
            console.error('ERROR al escribir fichero', error);
            return
        }
        console.log('Coche añadido correctamente al fichero');
    })
}

anadirCoche('Fiat', 'Punto', 2006, () => {
    anadirCoche('Ford', 'Fiesta', 2006, () => {
        console.log('Añadidos 2 coches');
    });
});