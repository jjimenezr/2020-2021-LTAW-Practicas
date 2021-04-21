//-- Imprimir información sobre la solicitud recibida

const http = require('http');
const fs = require('fs');
const PUERTO = 9000;

const server = http.createServer((req, res) => {

    //-- Construir el objeto url con la url de la solicitud
    const myURL = new URL(req.url, 'http://' + req.headers['host']);  
  
    //-- Leer los parámetros
    let nombre = myURL.searchParams.get('nombre');
    let apellidos = myURL.searchParams.get('apellidos');
    console.log(" Nombre: " + nombre);
    console.log(" Nombre real: " + apellidos);
    
  
    //-- Por defecto entregar formulario
    let content = fs.readFileSync('form1.html','utf-8');
  
    if (myURL.pathname == '/procesar') {
        //-- Reemplazar las palabras claves por su valores
        //-- en la plantilla HTML
        content = fs.readFileSync('resp.html', 'utf-8').replace("NOMBRE", nombre);
        content = content.replace("APELLIDOS", apellidos);
  
        //-- si el usuario es Chuck Norris se añade HTML extra
        let html_extra = "";
        if (nombre=="laxus" && apellidos=="rayitos") {
           html_extra = "<h2>los raijinshu le esperan</h2>";
        }
        content = content.replace("HTML_EXTRA", html_extra);
    }
  
    //-- Enviar la respuesta
    res.setHeader('Content-Type', "text/html");
    res.write(content);
    res.end()
  
});
  
server.listen(PUERTO);
console.log("Escuchando en puerto: " + PUERTO);