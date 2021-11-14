import initialState from "./InitialState";
import {Pokemon} from "../interfaces/pokemon";
import {stat} from "fs";

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
            console.log(action.payload)
            return newState
        case "CATCH":
            console.log(state)
            console.log('capturando ' + pokemon.name)
            pokemon.catched=true
            if (!viewedPokemon.find((poke)=>{return poke.id === pokemon.id})){
                viewedPokemon.push(pokemon)
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