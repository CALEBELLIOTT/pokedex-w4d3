

export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.height = data.height
    this.img = data.sprites?.front_default || data.img
    this.weight = data.weight
    this.moves = data.moves
  }


  static allPokemonTemplate(pokemon) {
    return `
    <div class="pokemon bg-dark d-flex align-items-center justify-content-center selectable"
    onclick="app.restfulPokemonController.showDetails('${pokemon.url}', '${pokemon.name}')">
    <h4 class="text-light">${pokemon.name}</h4>
  </div>
    `
  }

  get focusTemplate() {
    return `
    <div class="row">
    <div class="col-12 text-center">
      <h2>${this.name}</h2>
      <img src="${this.img}" class="sprite" alt="">
    </div>
    <div class="col-4 text-center">Weight: ${this.weight} lbs</div>
    <div class="col-4 text-center">Height: ${this.height} meters</div>
    <div class="col-4 d-flex flex-column">
      <p>Possible Moves</p>
      <div class="card moves-card p-2">
        <p id="moves" class=""></p>
      </div>
      <button class="btn btn-primary" onclick="app.sandboxPokemonController.addPokemon('${this.name}')">Catch!</button>
    </div>
  </div>
    `
  }


  get caughtTemplate() {
    return `
    <div class="caught-pokemon selectable" onclick="app.sandboxPokemonController.setFocus('${this.name}')">
    <h4>${this.name}</h4>
  </div>
    `
  }
}