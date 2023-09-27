export class Pokemon {

    constructor(
      public id: number = 0,
      public name: string = "Entrer un nom ....",
      public hp: number = 10,
      public cp: number = 100,
      public picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
      public types: string[] = ['Normal'],
      public created: Date = new Date()
    ) {}

  }
  