import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { tap,Observable, catchError,of } from 'rxjs';

@Injectable()
export class PokemonService {
  
  constructor(private http: HttpClient) {}

  getPokemonList(): Observable<Pokemon[]>  {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap ((pokemonList) => this.log(pokemonList)),
      catchError((error => this.handleError(error, []) ))
    )
  }

  private log(response : Pokemon[]|Pokemon|undefined) {
    console.table(response)    
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonById(pokemonId: number): Observable<Pokemon|undefined> {
    return this.http.get<Pokemon>(`api/pokemons/${pokemonId}`).pipe(
      tap ((pokemonList) => console.table(pokemonList)),
      catchError(error => this.handleError(error, undefined)))
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante', 
      'Feu', 
      'Eau', 
      'Insecte',
      'Normal',
      'Electrik', 
      'Poison', 
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
