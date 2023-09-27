import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
  selector: "app-edit-pokemon",
  template: `
    <h4 *ngIf="!pokemon" class="center">
      <app-loader></app-loader>
    </h4>
    <div *ngIf="pokemon">
      <h2 class="center">Editer {{ pokemon.name }}</h2>
      <p class="center">
        <img [src]="pokemon.picture" />
      </p>
      <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
    </div>
  `,
  styles: [],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      this.pokemonService
        .getPokemonById(+pokemonId)
        .subscribe((pokemon) => (this.pokemon = pokemon));
    } else {
      this.pokemon = undefined;
    }
  }
}
