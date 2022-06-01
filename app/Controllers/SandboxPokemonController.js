import { ProxyState } from "../AppState.js";
import { sandboxPokemonService } from "../Services/SandboxPokemonService.js";
import { Pop } from "../Utils/Pop.js";




function _drawCaughtPokemon() {
  let template = ``
  ProxyState.sandboxPokemon.forEach(p => template += p.caughtTemplate)
  document.getElementById("caught-pokemon").innerHTML = template
}

export class SandboxPokemonController {

  constructor() {
    this.getPokemon()
    ProxyState.on("sandboxPokemon", _drawCaughtPokemon)
  }

  async getPokemon() {
    try {
      await sandboxPokemonService.getPokemon()
    } catch (error) {
      console.log(error);
      Pop.toast(error.message, "error")
    }
    _drawCaughtPokemon()
  }

  async addPokemon(name) {
    console.log("catching!", name);
    try {
      await sandboxPokemonService.addPokemon(name)
    } catch (error) {
      console.error(error);
      Pop.toast(error, "error")
    }
    _drawCaughtPokemon()
  }

  setFocus(name) {
    let target = ProxyState.sandboxPokemon.find(p => p.name == name)
    ProxyState.targetPokemon = target
    document.getElementById('selected-info').innerHTML = ProxyState.targetPokemon.focusTemplate
    let template = ``
    console.log(ProxyState.targetPokemon);
    document.getElementById("moves").innerHTML = "<p>this api doesn't support moves :(</p>"
  }
}