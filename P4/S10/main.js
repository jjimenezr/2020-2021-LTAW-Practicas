//-- Cargar el módulo de electron
const electron = require('electron');

console.log("Arrancando proton digo electron...");

//-- Variable para acceder a la ventana principal
//-- Se pone aquí para que sea global al módulo principal
let win = null;

//-- Punto de entrada. En cuanto electron está listo,
//-- ejecuta esta función
electron.app.on('ready', ()=>{
    console.log("Evento Ready for the battle!");

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

    //-- En la parte superior se nos ha creado el menu
    //-- por defecto
    //-- Si lo queremos quitar, hay que añadir esta línea
    // win.setMenuBarVisibility(false);

    //-- Cargar contenido web en la ventana
    //-- La ventana es en realidad.... ¡un navegador!
    // win.loadURL('https://www.yugioh-card.com/es/');

    //-- Cargar interfaz gráfica en HTML
    win.loadFile("index.html");

    //-- Esperar a que la página se cargue y se muestre
    //-- y luego enviar el mensaje al proceso de renderizado para que 
    //-- lo saque por la interfaz gráfica
    win.on('ready-to-show', () => {
        console.log("todo bien?");
        win.webContents.send('print', "MENSAJE ENVIADO DESDE PROCESO MAIN");
    });

});
