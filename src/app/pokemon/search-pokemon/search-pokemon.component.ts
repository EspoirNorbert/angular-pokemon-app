import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Route, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent implements OnInit {
  // {..."a" , ..."ab".... "abz"}
  searchTerms = new Subject<string>();
  // {...pokemonList(a)....pokemonList(ab)}
  pokemons$: Observable<Pokemon[]>;

  /***
   * Suject appartient à rxJS elle stocke les requettes suscevices
   * Pour obtenir un flux de données dans le temps;
   * 
   * Un subject peut piloter un observable
   * Construire un flux de données.
   */

  constructor(private router: Router){}

  ngOnInit(): void {}

  search (term: string){
    // pousser le terme de recherche 
    // next comme push 
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemon' , pokemon.id]
    this.router.navigate(link);
  }
}
