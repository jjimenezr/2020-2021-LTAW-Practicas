console.log("Hola desde el proceso de la web...");

//-- Obtener elementos de la interfaz
const btn_test = document.getElementById("btn_test");
const display = document.getElementById("display");

btn_test.onclick = () => {
    display.innerHTML += "preparado para el dudududuelo! ";
    console.log("Botón apretado!");
}
