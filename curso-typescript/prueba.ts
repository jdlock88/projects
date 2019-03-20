function holaMundo(nombre){
    return "Hola mundo! Soy " + nombre;
}

var nombre = "Diego Lock";
var resultado = holaMundo(nombre);

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

//variables y tipos
//any recibe qualquier tipo.

//let solo en bloque(?) - var en toda app

var nombre:string = "Diego Lock";
var edad:number = 55;
var programador:boolean = true;
var langs:Array<string> = ["PHP", "JavaScript", "CSS"];

etiqueta.innerHTML = nombre + " - " + edad + " - ";

function devuelveNumero(num:number):string{
    return "Numero: " + num;
}

function devuelveString(texto:string):number{
    if(texto == "hola"){
        var num = 66
    }
    else{
        var num = 90
    }
    return  num;
}

alert(devuelveNumero(34));
alert(devuelveString("hola")); 