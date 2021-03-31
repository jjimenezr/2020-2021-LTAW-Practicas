//-- Crear una variable con la estructura definida
//-- en un fichero JSON

const fs = require('fs');

//-- Leer el fichero JSON
const  tienda_json = fs.readFileSync("tienda.json");

//-- Crear la estructura tienda a partir del contenido del fichero
const tienda = JSON.parse(tienda_json);

//-- Mostrar informacion sobre la tienda
console.log("usuarios registrados: " + tienda["usuarios"].length);

//-- Recorrer el array de productos
tienda["usuarios"].forEach((element, index)=>{
  console.log("nombre de usuario " + (index + 1) + ": " + element["nombre"]);
});

//-- Mostrar informacion sobre la tienda
console.log("productos disponibles: " + tienda["productos"].length);

//-- Recorrer el array de productos
tienda["productos"].forEach((element, index)=>{
  console.log("nombre de producto " + (index + 1) + ": " + element["nombre"]);
});

//-- Mostrar informacion sobre la tienda
console.log("pedidos pendientes: " + tienda["pedidos"].length);

//-- Recorrer el array de productos
tienda["pedidos"].forEach((element, index)=>{
  console.log("pedido " + (index + 1))
  console.log("nombre de usuario " + (index + 1) + ": " + element["usuario"]);
  console.log("direccion del usuario " + (index + 1) + ": " + element["direccion"]);
  console.log("numero de la tarjeta " + (index + 1) + ": " + element["tarjeta"]);
  element["compra"].forEach((buy, num)=>{
    console.log("compra del usuario " + (index + 1) + ": " + buy);
  });
});