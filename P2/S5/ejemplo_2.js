//-- Cadena con la estructura de la tienda en JSON
const tienda_json = `[
    {
      "nombre": "figura Laxus",
      "descripcion": "Imponente, majestuoso, grandioso y quizás chispeante, sí así es Laxus Dreyar, uno de los magos mas fuertes de fairy tail convertido en una figura para tu salón, nada mas colocarla sentirás que hay una chispa entre el y tú, será como si hubieseis estado conectados toda la vida, iluminará tu vida y casi que ya paro con los chistes sobre rayos, como dice la canción Laxus es la rebeldia inconformista y la brutalidad, si te encuentras con el lo mejor es comprarte esto por 45.89 Jewels.",
      "stock": 20
    },
    {
      "nombre": "llaves de Lucy",
      "stock": 12
    }
  ]`
  
  //-- Crear la estructura tienda a partir de la cadena en json
  const tienda = JSON.parse(tienda_json);
  
  //-- Mostrar informacion sobre la tienda
  console.log("Productos en la tienda: " + tienda.length);
  
  //-- Recorrer el array de productos
  tienda.forEach((element, index)=>{
    console.log("Producto: " + (index + 1) + ": " + element["nombre"]);
  });