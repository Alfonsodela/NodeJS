const fileSystem = require('fs');

const coches = [
    {id: 1, marca: 'Ford', modelo: 'Focus', annoFabricacion: 2020},
    {id: 2, marca: 'Peugeot', modelo: '207', annoFabricacion: 2015},
    {id: 3, marca: 'Audi', modelo: 'A4', annoFabricacion: 2011}
];

fileSystem.writeFile('coches.json', JSON.stringify(coches), (error) =>{
    if (error) {
        console.error('ERROR al escribir fichero', error);
        return
    }
    console.log('YEAH mi fichero se ha creado')
});
const fileSystem = require('fs');

const coches = [
    {id: 1, marca: 'Ford', modelo: 'Focus', annoFabricacion: 2020},
    {id: 2, marca: 'Peugeot', modelo: '207', annoFabricacion: 2015}
];

fileSystem.writeFile('coches.json', JSON.stringify(coches), (error) => {
    if (error) {
        console.error('ERROR al escribir fichero', error);
        return
    }
    console.log('YEAH mi fichero se ha creado')
    //return
});