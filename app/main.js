import { RestfulPokemonController } from "./Controllers/RestfulPokemonController.js";
import { SandboxPokemonController } from "./Controllers/SandboxPokemonController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

  restfulPokemonController = new RestfulPokemonController()
  sandboxPokemonController = new SandboxPokemonController()
}

window["app"] = new App();
