//-- Cargar el módulo de electron
const electron = require('electron');

console.log("Arrancando proton digo electron...");

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
    console.log("Evento Ready for the battle!");

    //-- Crear la ventana principal de nuestra aplicación
    win = new electron.BrowserWindow({
        width: 800,  //-- Anchura 
        height: 600  //-- Altura
    });

    //-- En la parte superior se nos ha creado el menu
    //-- por defecto
    //-- Si lo queremos quitar, hay que añadir esta línea
    win.setMenuBarVisibility(false);

});
