const http = require('http');
const fs = require('fs');
const url = require('url');

//-- Definir el puerto a utilizar
const PUERTO = 9000;

//-- Crear el servidor
const server = http.createServer((req, res) => {
    
  //-- Indicamos que se ha recibido una petición
  console.log("recibido activacion de voz del señor stark!");
  
  //-- obtenemos la url de la peticion y la parseamos para obtener todos los parametros
  let client_request = url.parse(req.url, true);
  let file = "";
  let Type = "";
  console.log(client_request);

  //-- dependiendo del pathname le damos una u otra cosa
  if (client_request.pathname == '/favicon.ico') {
    file = './imagenes_tienda/icon.png';
    type = 'image/png'
  }else if (client_request.pathname == '/') {
    file = './home.html';
    type = 'text/html'
  }

  //-- leemos el rescurso path para saber que entregarle al cliente
  fs.readFile(file, (err, data) => {

    if (err) {  //-- Ha ocurrido algun error
      console.log("Error!!")
      console.log(err.message);
    } else {
      //-- terminamos la respuestas
      res.statusCode = 200;   //-- codigo para decir que todo va bien
      res.statusMessage = "OK";   //-- mensaje de que todo va bien
      res.setHeader('Content-Type', Type);
      res.write(data);
      res.end();
    }

  });
});

//-- Activar el servidor: ¡Que empiece la fiesta!
server.listen(PUERTO);

console.log("Jarvis activado!. Escuchando en puerto: " + PUERTO);