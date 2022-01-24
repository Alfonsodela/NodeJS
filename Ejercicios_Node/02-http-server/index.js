const { fstat } = require('fs');
const http = require('http');

const PORT = 3000;

// Si la llamada es a / vamos a entregar un HTML que renderizará el navegador
// Si la llada es a  cohes, enviaremos la info que tenemos en el fichero coches.json

const htmlToSend = `<html>
    <body>
        <h1>Upgrade Hub - Node Server</h1>
        <p>Soy un documento html enviado por el servidor</p>
    </body>
</html>`;

const manejadorPeticiones = (req, res) => {
    if (peticion.url === '/') {
        respuesta.setHeader('Content-Type', 'text/html');
        respuesta.end(htmlToSend);
        // Enviar html
        return;
    } else if (peticion.url === '/coches') {
        fstat.readFile('./coches.json', (errorLectura, errorLeidos) => {
            if (errorLectura) {
                console.error('Error leyendo archivo', errorLectura);
                respuesta.writeHead(500);
                respuesta.end('Ha ocurrido un error en el servidor, inténtelo más tarde');
                return;
            }

            
            const coches = JSON.parse(datosLeidos);
            respuesta.writeHeader(200);
            respuesta.setHeader('Content-Type', 'application/json')
            // respuesta.end(JSON.stringify(coches));
            // como datosLeidos es un string, se puede enviar correctamente sin parsear y stringificar
            respuesta.end(datosLeidos);
        })
        //Leer y enviar coches
        return;
    } else {
        respuesta.writeHead(404);
        respuesta.end('No se ha encontrado el recurso');
        return;
    }
    console.log(peticion.url);
    respuesta.end('');
}

const servidor = http.createServer(manejadorPeticiones);

servidor.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ', PORT);
});
