import { Component } from '@angular/core';

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})
export class BodyComponent{

    mostrar = true;

    frase: any = {
        mensaje: "Why always me?",
        autor: "Mario Balotelli"

    };


    personajes: string[] = ['Spiderman', 'Venon', 'Carnage']


}