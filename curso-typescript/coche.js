var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
        this.color = "Blanco";
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
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
