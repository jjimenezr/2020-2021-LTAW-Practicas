//-- Lectura y modificación de un fichero JSON
const fs = require('fs');

//-- Leer el fichero JSON
const  tienda_json = fs.readFileSync("tienda.json");

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

//-- Modificar el nombre del producto 2
tienda["productos"].forEach(element => {
    element["stock"] = element["stock"] + 1
});

//-- Convertir la variable a cadena JSON
let myJSON = JSON.stringify(tienda);

//-- Guardarla en el fichero destino
fs.writeFileSync("tienda.json", myJSON);

console.log("Información guardada en fichero: tienda.json");