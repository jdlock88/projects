import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre = 'Diego';

  nombre2 = 'juAn dieGo lock moran';

  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre : "Logan",
    clave : "Wolverine",
    edad: 500,
    direccion:{
      calle:"Primavera",
      casa:"19"
    }
  };

  valoreDePromesa = new Promise( ( resolve, reject ) =>{
    setTimeout( ()=>resolve('Llego la data!'), 3500);
  });

  fecha = new Date();

  video = "U4ejmeEals0";

}
