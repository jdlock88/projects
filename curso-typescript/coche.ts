interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color:string;
    public modelo:string;
    public velocidad:number;

    constructor(modelo = null){
        this.velocidad = 0;
        if(modelo==null){
            this.modelo = "BMW Generico";            
        }else{
            this.modelo = modelo;
        }
        this.color = "Blanco";
    }

    public getColor(){
        return this.color;
    }

    public setColor(color:string){
        this.color = color;
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
    }

    public getVelocidad():number{
        return this.velocidad;
    }

    public setVelocidad(velocidad:number){
        this.velocidad = velocidad;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }
}

var coche = new Coche();
var coche2 = new Coche("Toyota");
var coche3 = new Coche();

coche.setColor("ROJO");
coche2.setColor("AZUL");
coche3.setColor("VERDE");

coche.acelerar();
coche.acelerar();
coche.acelerar();

coche.frenar();

console.log("Color del coche 1: " + coche.getColor());
console.log("Color del coche 2: " + coche2.getColor());
console.log("Color del coche 3: " + coche3.getColor());

console.log("velocidad del coche 1: " + coche.getVelocidad());

console.log("Modelo del coche 1: " + coche.getModelo());
console.log("Modelo del coche 2: " + coche2.getModelo());

