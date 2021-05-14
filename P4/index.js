const electron = require('electron');

//-- Obtener elementos de la interfaz
//const btn_test = document.getElementById("btn_test");
//const display = document.getElementById("display");
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const info4 = document.getElementById("info4");
const users = document.getElementById("user");

//-- Acceder a la API de node para obtener la info
//-- Sólo es posible si nos han dado permisos desde
//-- el proceso princpal
info1.textContent = process.versions.node;
info2.textContent = process.versions.chrome;
info3.textContent = process.versions.electron;

//btn_test.onclick = () => {
    //display.innerHTML += "preparado para el dudududuelo! ";
    //console.log("Botón apretado!");

    //-- Enviar mensaje al proceso principal
    //electron.ipcRenderer.invoke('test', "MENSAJE DE PRUEBA: Boton apretado");
//}

//-- Mensaje recibido del proceso MAIN para la ip
electron.ipcRenderer.on('ip', (event, message) => {
    console.log("Recibida Ip: " + message);
    info4.innerHTML = message;
});

electron.ipcRenderer.on('list', (event, message) => {
    console.log("Recibido numero de usuarios: " + message);
    users.innerHTML = message;
});
