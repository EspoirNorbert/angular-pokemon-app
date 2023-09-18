import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from "../pokemon";
import { POKEMONS } from "../mock-pockemon";

@Component({
  selector: "app-detail-pokemon",
  templateUrl: "./detail-pokemon.component.html",
  styles: [],
})
export class DetailPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pokemonList = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
    if (pokemonId) {
      const pokemon: Pokemon | undefined = this.pokemonList.find(
        (pokemon) => pokemon.id == +pokemonId
      );
      this.pokemon = pokemon;
    }
    console.log(pokemonId);
  }

  goToPokemonList() {
    this.router.navigate(["/pokemons"]);
  }
}