function main() {
    var botondb = document.getElementById("db");
    var botonft = document.getElementById("ft");
    var botonop = document.getElementById("op");
    var botonnt = document.getElementById("nt");
    var audiodb = document.getElementById("goku");
    var audioft = document.getElementById("natsu");
    var audioop = document.getElementById("luffy");
    var audiont = document.getElementById("naruto");

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
}