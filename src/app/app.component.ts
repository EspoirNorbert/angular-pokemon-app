import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <nav>
      <div class="nav-wrapper teal">
        <a routerLink="/pokemons" class="brand-logo center"> Pokédex </a>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
