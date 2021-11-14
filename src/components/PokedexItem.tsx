import React from 'react'
import {Pokemon} from "../utils/interfaces/pokemon";

interface Props {
pokemon:Pokemon
}

const PokedexItem:React.FC<Props> = (props) => {
    return <p>{props.pokemon.name}</p>
}

export default PokedexItem
