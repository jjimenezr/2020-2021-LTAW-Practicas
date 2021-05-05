//-- Cargar las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');
const fs = require('fs');

//-- constantes y variables utiles
const PUERTO = 9000;
let list = 0;

//-- Crear una nueva aplciacion web
const app = express();

//-- Crear un servidor, asosiaco a la App de express
const server = http.Server(app);

//-- Crear el servidor de websockets, asociado al servidor http
const io = socket(server);

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Definir el punto de entrada principal de mi aplicación web
app.get('/', (req, res) => {
    file = fs.readFileSync('./fairy_public/fairy_chat.html', 'utf-8');
    res.send(file);
});

//-- Esto es necesario para que el servidor le envíe al cliente la
//-- biblioteca socket.io para el cliente
app.use('/', express.static(__dirname +'/'));

//-- El directorio publico contiene ficheros estáticos
app.use(express.static('fairy_public'));

//------------------- GESTION SOCKETS IO
//-- Evento: Nueva conexion recibida
io.on('connect', (socket) => {

    //-- Enviar mensaje de bienvenida y de nuevo usuario 
    console.log('MIEMBRO EN BUSCA DE MISION'.cyan);
    socket.send('BIENVENIDO AL GREMIO');
    socket.broadcast.emit('message', 'NUEVA ENTRADA EN EL GREMIO');
    list += 1;


    //-- Evento de desconexión
    socket.on('disconnect', function(){
        console.log('MIEMBRO SALIENDO DE MISION, GAMBARE'.cyan);
        list -= 1;
    });  

    //-- Mensaje recibido: Reenviarlo a todos los clientes conectados
    socket.on("message", (msg)=> {
        console.log("Mensaje Recibido!: " + msg.green);

        //-- si el mensaje comienza con '/' se tratara como un comando
        if (msg.startsWith("/")) {
            console.log("RECIBIDO COMANDO, MIRAJANE LO PROCESARÁ".yellow);
            if (msg == "/help") {
                socket.send("Lissana: COMANDOS:" + "<br>" + "/help: Lissana te muestra un panel con informacion importante" + "<br>" 
                + "/list: Levy te dirá cuantas personas hay en el gremio" + "<br>" + "/hello: el maestro te saludará" + "<br>" + 
                "/date: Lucy te dirá en que día estamos" + "<br>" + "/misiones: lee el tablon de anuncios de misiones del gremio");
            }else if (msg == "/list") {
                socket.send("Levy: Hola!! hay un total de " + list + " personas en el gremio hoy y Gajeel como siempre sigue cantando");
            }else if (msg == "/hello") {
                socket.send("Makarov(Master): hola de nuevo!! recuerda mis palabras, en nuestro gremio siempre encontrarás una familia");
            }else if (msg == "/date") {
                let date = new Date();
                socket.send("Lucy: segun Horologium hoy es " + date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
            }
            
        }else{
            //-- Reenviarlo a todos los clientes conectados
            io.send(msg);
        }
    });

});

//-- Lanzar el servidor HTTP
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);