const http = require('http');

//-- Definir el puerto a utilizar
const PUERTO = 8080;

//-- Crear el servidor
const server = http.createServer((req, res) => {
    
  //-- Indicamos que se ha recibido una petición
  console.log("recibido activacion de voz del señor stark!");
 

  //-- Cabecera que indica el tipo de datos del
  //-- cuerpo de la respuesta: Texto plano
  res.setHeader('Content-Type', 'text/plain');

  //-- Mensaje del cuerpo
  res.write("Hola señor Stark!!\n");

  //-- Terminar la respuesta y enviarla
  res.end();
});

//-- Activar el servidor: ¡Que empiece la fiesta!
server.listen(PUERTO);

console.log("Jarvis activado!. Escuchando en puerto: " + PUERTO);