//-- Cargar el módulo de electron
const electron = require('electron');

console.log("Arrancando proton digo electron...");

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
    console.log("Evento Ready for the battle!")
});
