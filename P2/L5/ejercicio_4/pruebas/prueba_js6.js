//-- Ejemplo de definicion de funciones

//-- Se definen 4 funciones sin parámetros
//-- de diferentes formar

//-- Definición clásica
function anime_fav1() {
    console.log("fairy tail!!");
}

//-- Se define una función y se asigna a una variable
const anime_fav2 = function() {
    console.log("one piece....");
}

//-- Otra forma de hacer lo anterior, pero con una
//-- notación abreviada
const anime_fav3 = () => {
    console.log("naruto+++")
}

//-- Definición de funciones dentro de un 
//-- objeto literal
const yo = {
    creatividad : -10,
    anime_fav4 : function() {
        console.log("dragon ball---");
    },
    anime_fav5: () => {
        console.log("boku no hero****");
    }
}

//-- Llamando a las funciones
anime_fav1()
anime_fav2()
anime_fav3()
yo.anime_fav4()
yo.anime_fav5()