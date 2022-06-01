import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";


class RestfulPokemonService {

  async getPokemon() {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    ProxyState.RestfulPokemon = res.data.results.map(p => p)
  }
  async showDetails(url,) {
    const res = await axios.get(url)
    console.log(res.data);
    ProxyState.targetPokemon = new Pokemon(res.data)
    console.log(ProxyState.targetPokemon);
  }

}


export const restfulPokemonService = new RestfulPokemonService()