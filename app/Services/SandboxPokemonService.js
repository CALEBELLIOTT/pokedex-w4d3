import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js";
import { Pop } from "../Utils/Pop.js";



class SandboxPokemonService {


  async addPokemon(name) {
    let find = ProxyState.sandboxPokemon.find(p => p.name == name)
    if (!find) {
      ProxyState.sandboxPokemon.push(ProxyState.targetPokemon)
      await axios.post('https://bcw-sandbox.herokuapp.com/api/caleb/pokemon', ProxyState.targetPokemon)
    } else {
      Pop.toast("that pokemon has already been caught!")
    }
    console.log(ProxyState.sandboxPokemon);
  }


  async getPokemon() {
    const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/caleb/pokemon')
    console.log(res);
    ProxyState.sandboxPokemon = res.data.map(p => new Pokemon(p))
  }

}

export const sandboxPokemonService = new SandboxPokemonService()