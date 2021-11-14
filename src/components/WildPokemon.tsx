import React from 'react'
import {Pokemon} from "../utils/interfaces/pokemon";

interface Props {
    pokemon:Pokemon
}
const WildPokemon:React.FC<Props>= (props) => {
     return (
            <div>
                <div>
                    <img
                        style={style}
                        src={props.pokemon.sprites.other.dream_world.front_default}
                        alt={props.pokemon.name}
                    />
                </div>
            </div>
        );
    }

const style: React.CSSProperties = {
    height: "30%",
    position: "absolute",
    left: "70%",
    top: "44%",
    width: "30%",
}
export default  WildPokemon