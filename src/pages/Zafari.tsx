import React, {useEffect, useState} from "react";
import {getPokemon} from "../utils/axios/CustomService";
import {getWildPokemon} from "../utils/PokemonGenerator";
import {Pokemon} from "../utils/interfaces/pokemon";
import {useDispatch} from "react-redux";
import {ReducerTypes} from "../utils/redux/Reducer";
import Nameplate from "../components/NamePlate";
import WildPokemon from "../components/WildPokemon";
import BattleGround from "../components/BattleGround";
import BattleMenu from "../components/BattleMenu";
import AppBar from "../components/AppBar";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
interface Props {

}

const Zafari:React.FC<Props> = (props) => {

    const [pokemon, setPokemon] = useState<Pokemon>()
    const [reload,setReload] =useState<boolean>()
    const [message,setMessage] = useState<string>('')
    const dispatch = useDispatch();
  //  const pokemonsList = useSelector((state: State)=>{return state.viewedPokemon})

    useEffect(()=>{
        var pokemon:Pokemon
        getPokemon(getWildPokemon()).then((data)=>{
            pokemon = data.data;
            let msg:string = 'Un ' + pokemon.name + ' salvaje ha aparecido!'
            setMessage(msg)
            dispatch({type:ReducerTypes.SEE,payload: pokemon})
            setPokemon(pokemon)
        })
    },[reload])

    const onRunHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setReload((prevState => !prevState))
    }

    const onCachtHandler = (event :React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        var num: number = Math.round(Math.random() * 100);
        console.log(num)
        let msj:string = ''
        console.log(num<25)
        if (num > 25) {
            msj = pokemon?.name + '  ha escapado! '
            setPokemon(undefined)
        }else {
            if (pokemon) {
                let pokemonTmp: Pokemon = {...pokemon}
                dispatch({type: ReducerTypes.CATCH, payload: pokemonTmp})
                msj = pokemonTmp.name + ' ha sido capturado!'
                setPokemon(undefined)
            }
        }
        setMessage(msj)
    }

    return (<>
            <AppBar/>
            <BattleGround/>
            {(pokemon)?(
                <>
                    <Nameplate pokemon={pokemon}/>
                    <WildPokemon pokemon={pokemon}/>
                </>
            ): null}
            <BattleMenu>
                <div style={FlexStyle}>
                    <div>
                        {message}
                    </div>
                    <div style={FlexColum}>
                        {(pokemon)?(
                            <>
                                <Button style={ButtonStyle} variant="contained" onClick={onCachtHandler}>Atrapar</Button>
                                <Button style={ButtonStyle} variant="contained" onClick={onRunHandler}>Correr</Button>
                            </>
                        ):
                            <>
                                <Button style={ButtonStyle} variant="contained" onClick={onRunHandler}>Buscar</Button>
                            </>

                        }
                    </div>
            </div>
            </BattleMenu>
        </>
    )
}

const FlexStyle:React.CSSProperties = {
    display:"flex",
    justifyContent:"space-between"
}
const FlexColum:React.CSSProperties = {
    display:"flex",
    flexDirection:"column",
}

const ButtonStyle: React.CSSProperties = {
    margin:"2%"
}

export default Zafari