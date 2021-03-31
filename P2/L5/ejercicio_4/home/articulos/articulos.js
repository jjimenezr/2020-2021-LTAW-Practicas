function main() {
    var boton_rupee1 = document.getElementById("rupia1");
    var boton_rupee2 = document.getElementById("rupia2");
    var boton_rupee3 = document.getElementById("rupia3");
    var botoncarro = document.getElementById("carro")
    var coin = document.getElementById("coin");
    var audiohey = document.getElementById("hey")


    boton_rupee1.onclick = () => {
        coin.play();
    }

    boton_rupee2.onclick = () => {
        coin.play();
    }

    boton_rupee3.onclick = () => {
        coin.play();
    }

    botoncarro.onclick = () => {
        audiohey.play();
    }
}