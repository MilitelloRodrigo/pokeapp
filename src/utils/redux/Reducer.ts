import initialState from "./InitialState";
import {Pokemon} from "../interfaces/pokemon";

export enum ReducerTypes {
    SEE= "SEE",
    CATCH = "CATCH",
    GETALL = "GET_ALL"
}

interface action{
    type:string,
    payload:Pokemon
}
const Reducer= (state = initialState ,action:action) => {
    let pokemon:Pokemon = action.payload
    let newState = {...state}
    let  viewedPokemon: Array<Pokemon> =state.viewedPokemon
    switch (action.type){
        case "SEE":
            console.log(state)
            console.log("viendo " + pokemon.name)
            pokemon.catched = false
            newState = {...state}
            if (!viewedPokemon.find((poke)=>{return poke.id === pokemon.id})){
                viewedPokemon.push(pokemon)
            }
            newState.viewedPokemon = viewedPokemon;
            return newState
        case "CATCH":
            console.log(state)
            console.log('capturando ' + pokemon.name)
            console.log (pokemon)
            console.log(pokemon.catched)
            pokemon.catched=true
            console.log(pokemon.catched)
            let poke = viewedPokemon.find((poke , id)=>{return (poke.id===pokemon.id && poke.catched===false)})
            if (poke){
                poke.catched=true
            }
            newState.viewedPokemon = viewedPokemon;
            return {...state}
        case "GET_ALL":
            console.log("tratando de obtener todos")
            console.log(state)
            return state
        default:
            return state
    }
}

export default Reducer;