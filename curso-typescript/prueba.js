function holaMundo(nombre) {
    return "Hola mundo! Soy " + nombre;
}
var nombre = "Diego Lock";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
//variables y tipos
//any recibe qualquier tipo.
//let solo en bloque(?) - var en toda app
var nombre = "Diego Lock";
var edad = 55;
var programador = true;
var langs = ["PHP", "JavaScript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad + " - ";
function devuelveNumero(num) {
    return "Numero: " + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString("hola"));
