module Tienda{
    export class Ropa{
        constructor(public titulo : string){
            alert(titulo);
        }
    }

    export class Informatica{
        constructor(public titulo : string){
            alert("Tienda de tecnologia: " + titulo);
        }
    }
}

import Informatica = Tienda.Informatica;
let carga_informtica =  new  Informatica("Supertienda");

function arranque(lanzar:string){
    return function(target : Function){
        target.prototype.lanza = function() : void {
            alert(lanzar);
        }
    }
}



// @arranque("Lanzamiento del curso de NodeJS y Angular 2")
class Programa{
    public nombre:string;
    public version:number;

    getNombre(){
        return this.nombre
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getVersion(){
        return this.version
    }

    setVersion(version:number){
        this.version = version;
    }
}

class EditorVideo extends Programa{
    
    public timeline:number;

    getTimeline(){
        return this.timeline
    }

    setTimeline(timeline:number){
        this.timeline = timeline;
    }

    getAllData():string{
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    }

}


var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(8);
editor.setTimeline(4000);

console.log(editor.getAllData());


//Formulario

var programas = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa =  new Programa();
    programa.setNombre(nombre);
    programa.setVersion(3);

    programas.push(programa);

    var list = "";
    for(var i =0; i<programas.length; i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>"; 
    }

    var listado = <HTMLElement>document.getElementById("Listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";

}

setInterval(() => {
    console.log("hola");
}, 1000);

var frutas = [
    "manzana",
    "naranja",
    "uva"
];

var recorrer = frutas.map(fruta => {
    console.log(fruta);
    console.log(fruta.length);
})

