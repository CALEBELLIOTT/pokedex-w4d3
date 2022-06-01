import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { restfulPokemonService } from "../Services/RestfulPokemonService.js";
import { Pop } from "../Utils/Pop.js";



function _drawAllPokemon() {
  let template = ""
  ProxyState.RestfulPokemon.forEach(p => template += Pokemon.allPokemonTemplate(p))
  document.getElementById('all-pokemon').innerHTML = template
}


export class RestfulPokemonController {

  constructor() {
    this.getPokemon()
  }

  async getPokemon() {
    try {
      await restfulPokemonService.getPokemon()
      _drawAllPokemon()
    } catch (error) {
      console.error(error);
      Pop.toast(error.message, "error")
    }
  }

  async showDetails(url) {
    console.log(url);
    try {
      await restfulPokemonService.showDetails(url,)
    } catch (error) {
      console.error(error)
      Pop.toast(error.message, "error")
    }
    document.getElementById('selected-info').innerHTML = ProxyState.targetPokemon.focusTemplate
    let template = ``
    ProxyState.targetPokemon.moves.forEach(m => {
      template += m.move.name + "<br>"
      document.getElementById("moves").innerHTML = template
    })
  }




}