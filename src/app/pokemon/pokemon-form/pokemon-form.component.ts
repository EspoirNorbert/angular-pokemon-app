import { PokemonService } from './../pokemon.service';
import { OnInit, Input } from '@angular/core';
import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styles: [
  ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;

  types: string[];

  constructor(private pokemonService: PokemonService,
    private router: Router) {}

  ngOnInit(): void {
      this.types = this.pokemonService.getPokemonTypeList();
  }

  hasType(type: string): boolean {
      return this.pokemon.types.includes(type);
  }

  selectType() {}

  onSubmit() {
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe((pokemon) => {this.router.navigate(['/pokemon',this.pokemon.id])
  });
    
  }

}
