//-- Cargar las dependencias
const socket = require('socket.io');
const http = require('http');
const express = require('express');
const colors = require('colors');
const fs = require('fs');
const electron = require('electron');
const ip = require('ip');

//-- constantes y variables utiles
const PUERTO = 9000;
let list = 0;
win.webContents.send('list', list);

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
    win.webContents.send('list', list);

    //-- Evento de desconexión
    socket.on('disconnect', function(){
        console.log('MIEMBRO SALIENDO DE MISION, GAMBARE'.cyan);
        list -= 1;
        win.webContents.send('list', list);
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
            }else if (msg == "/misiones") {
                socket.send("MISIONES:" + "<br>" + "MISION CLASE SS: en busca de acnologia" + "<br>" + "MISION CLASE A: en la isla galuna hay gente extraña"
                + "<br>" + "MISION CLASE D: ayuda a recuperar un libro de un ladrón");
            }else{
                socket.send("Mirajane: lo siento no te puedo dar una respuesta, usa /help te podría ayudar")
            }
        }else{
            //-- Reenviarlo a todos los clientes conectados
            io.send(msg);
        }
    });

});

electron.app.on('ready', () => {
    //-- Aquí se crea la ventana y se hace lo relacionado con la gui
    //-- Pero el servidor no va aquí dentro, si no fuera, como en la práctica 3
    console.log("Electron Ready for the battle!");

    //-- Crear la ventana principal de nuestra aplicación
    win = new electron.BrowserWindow({
        width: 800,  //-- Anchura 
        height: 600,  //-- Altura

        //-- Permitir que la ventana tenga ACCESO AL SISTEMA
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    //-- Cargar interfaz gráfica en HTML
    win.loadFile("index.html");

    //-- obtenemos direccion de ip y se la mandamos al proceso de renderizado
    win.on('ready-to-show', () => {
        win.webContents.send('ip', 'http://' + ip.address() + ':' + PUERTO);
    });
});

//-- Lanzar el servidor HTTP
//-- ¡Que empiecen los juegos de los WebSockets!
server.listen(PUERTO);
console.log("El gremio abre sus puertas: " + PUERTO);