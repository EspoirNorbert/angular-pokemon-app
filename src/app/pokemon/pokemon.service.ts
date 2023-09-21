import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pockemon';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {
  
  constructor(private http: HttpClient) {}

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id== pokemonId)
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
