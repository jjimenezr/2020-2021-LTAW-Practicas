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
  //console.log(client_request.pathname);

  //-- dependiendo del pathname le damos una u otra cosa
  if (client_request.pathname == '/favicon.ico') {
    file = './icon.png';
  }else if (client_request.pathname == '/') {
    file = './home.html';
  }else{
    file = ".";
    path = client_request.pathname.split('/');
    console.log(path)
    if (path[2] == 'home' || path[2] == 'error404') {
      client_request.pathname = '';
      for (let i = 2; i < path.length; i++) {
        client_request.pathname += "/" + path[i]; 
      }
      file += client_request.pathname;
    }else if (path[3] == 'home' || path[3] == 'error404' || path[3] == 'home.html') {
      client_request.pathname = '';
      for (let i = 3; i < path.length; i++) {
        client_request.pathname += "/" + path[i]; 
      }
      file += client_request.pathname;
    }else if (path[4] == 'home' || path[4] == 'error404' || path[4] == 'home.html') {
      client_request.pathname = '';
      for (let i = 4; i < path.length; i++) {
        client_request.pathname += "/" + path[i]; 
      }
      file += client_request.pathname;
    }else{
      file += client_request.pathname
    }
  }

  //-- leemos el rescurso path para saber que entregarle al cliente
  fs.readFile(file, (err, data) => {
    //-- clasificamos que tipo de archivo me pide
    console.log(file)
    if (file.split('.')[2] == 'css') {
      console.log(file.split('.')[2])
      type = 'text/css';
    }else if (file.split('.')[2] == 'gif') {
      console.log(file.split('.')[2])
      type = 'image/gif';
    }else if (file.split('.')[2] == 'html') {
      console.log(file.split('.')[2])
      type = 'text/html';
    }else if (file.split('.')[2] == 'png') {
      console.log(file.split('.')[2])
      type = 'image/png';
    }else if (file.split('.')[2] == 'mp3') {
      console.log(file.split('.')[2])
      type = 'audio/mp3'
    }else if (file.split('.')[2] == 'js') {
      console.log(file.split('.')[2])
      type = 'text/javascript'
    }

    if (err) {  //-- Ha ocurrido algun error
      res.statusCode = 404;   //-- codigo para decir que no se ha encontrado el archivo
      res.statusMessage = "NOT FOUND";   //-- mensaje de que no se ha encontrado el archivo
      res.setHeader('Content-Type', 'text/html');
      res.write(fs.readFileSync('./404error.html'));
      res.end();
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