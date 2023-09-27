import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Route, Router } from '@angular/router';
import { Observable, Subject, debounceTime, delay, distinctUntilChanged, of, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon.service';

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

  constructor(private router: Router, private pokemonService:
    PokemonService){}

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {..."a"...."ab"...."abz"."ab"...."abc"....}
      debounceTime(300), // trop success supprimé
      // {..."ab"..."ab"...."abc"....}
      // atteindre qu'il est de changment dans la requette
      distinctUntilChanged(), // supprimer les repetitons
      // {..."ab"..."ab"...."abc"....}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // {...pokemonList(ab).......pokemonList(abc)....}
      // concatMap / mergeMap / SwitchMap (Effectuer la requette recent)
    );
  }

  search (term: string){
    // pousser le terme de recherche 
    // next comme push 
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/pokemons' , pokemon.id]
    this.router.navigate(link);
  }
}
