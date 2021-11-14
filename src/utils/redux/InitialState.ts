//aca tengo quie importar la interface de Pokemons

import {Pokemon} from "../interfaces/pokemon";

export interface State {
    viewedPokemon: Array<Pokemon>,
}
const initialState: State = {
    viewedPokemon : [],
}

export default initialState