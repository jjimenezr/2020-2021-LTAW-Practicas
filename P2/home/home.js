function main() {
    var botondb = document.getElementById("db");
    var botonft = document.getElementById("ft");
    var botonop = document.getElementById("op");
    var botonnt = document.getElementById("nt");
    var botoncarro = document.getElementById("carro")
    var audiodb = document.getElementById("goku");
    var audioft = document.getElementById("natsu");
    var audioop = document.getElementById("luffy");
    var audiont = document.getElementById("naruto");
    var audiohey = document.getElementById("hey");
    var display = document.getElementById("display1");
    var box = document.getElementById("caja");

    botondb.onmouseover = () => {
        audiodb.play();
    }

    botonft.onmouseover = () => {
        audioft.play();
    }

    botonop.onmouseover = () => {
        audioop.play();
    }

    botonnt.onmouseover = () => {
        audiont.play();
    }

    botoncarro.onclick = () => {
        audiohey.play();
    }

    box.oninput = () => {

        //-- Crear objeto para hacer peticiones AJAX
        const m = new XMLHttpRequest();
        console.log(m);
    
        //-- Función de callback que se invoca cuando
        //-- hay cambios de estado en la petición
        m.onreadystatechange = () => {
            console.log("entro en el onready");
            //-- Petición enviada y recibida. Todo OK!
            if (m.readyState==4) {
                console.log("entro en el ready 4")
                //-- Solo la procesamos si la respuesta es correcta
                if (m.status==200) {
                    console.log("entro en el status 200");
                    //-- La respuesta es un objeto JSON
                    let productos = JSON.parse(m.responseText)
    
                    console.log(productos);
    
                    //-- Borrar el resultado anterior
                    display.innerHTML = "";
    
                    //--Recorrer los productos del objeto JSON
                    for (let i=0; i < productos.length; i++) {
    
                        //-- Añadir cada producto al párrafo de visualización
                        display.innerHTML += productos[i];
    
                        //-- Separamos los productos por ',''
                        if (i < productos.length-1) {
                        display.innerHTML += '<br>';
                        }
                    }
    
                }
            }
        }

        console.log(caja.value.length);

        //-- La peticion se realiza solo si hay al menos 1 carácter
        if (caja.value.length >= 1) {

            //-- Configurar la petición
            m.open("GET","/busqueda?param1=" + caja.value, true);

            //-- Enviar la petición!
            m.send();
            
        } else {
            display1.innerHTML="";
        }
    }
}