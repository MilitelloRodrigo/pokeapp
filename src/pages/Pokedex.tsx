import React, {useEffect, useState} from "react";
import {ReducerTypes} from "../utils/redux/Reducer";
import {useDispatch, connect} from "react-redux";
import {Pokemon} from "../utils/interfaces/pokemon";
import PokedexItem from "../components/PokedexItem";
interface Props {
    viewedPokemon:Pokemon[],
}

const Pokedex:React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [lista,setLista] = useState<any>()
    useEffect(()=>{
        console.log('estos son los pokimones')
        console.log(props.viewedPokemon)
        let list = props.viewedPokemon.map((pokemon)=>{
            return <PokedexItem pokemon={pokemon}/>
        })
        setLista(list)
        console.log(lista)
    })
    return <div>{lista}</div>

}

const mapStateToProps = (state: { viewedPokemon: any; }) => ({
    viewedPokemon: state.viewedPokemon
});
export default connect(mapStateToProps)(Pokedex)