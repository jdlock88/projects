import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-heroe-filtro',
  templateUrl: './heroe-filtro.component.html',
  styleUrls: ['./heroe-filtro.component.css']
})
export class HeroeFiltroComponent implements OnInit {

  heroes: Heroe[] = [];
  termino:string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _heroesService : HeroesService,
    private _router : Router) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      
      this.termino = params['terminal'];
      this.heroes = this._heroesService.buscarHeroes( params['terminal']);
      
    });
  }

  verHeroe(idx: number ){
    this._router.navigate( ['/heroe', idx]);
  }
}
