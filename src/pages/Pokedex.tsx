import React, {useEffect, useState} from "react";
import {ReducerTypes} from "../utils/redux/Reducer";
import {useDispatch, connect} from "react-redux";
import {Pokemon} from "../utils/interfaces/pokemon";
import PokedexItem from "../components/PokedexItem";
import AppBar from "../components/AppBar";
interface Props {
    viewedPokemon:Pokemon[],
}

const Pokedex:React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const [lista,setLista] = useState<any>()
    useEffect(()=>{
        console.log('estos son los pokimones')
        console.log(props.viewedPokemon)
        let list = Array(151)
        for (var i = 1; i < 152; i++) {
            let pokemon = props.viewedPokemon.find((pokemon)=>{return pokemon.id===i})
            if(pokemon){
                list[i]=(<PokedexItem
                    pokemon={pokemon}
                    key={pokemon.id}
                id={i}/>)
            }else(
                list[i]=(<PokedexItem
                key={i}
                id={i}/>)
            )
        }
        setLista(list)
    },[])
    return <>
            <AppBar/>
            <div style={style}>{lista}</div>
        </>

}

const style:React.CSSProperties= {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"space-between",
    flex:"row"
}

const mapStateToProps = (state: { viewedPokemon: any; }) => ({
    viewedPokemon: state.viewedPokemon
});
export default connect(mapStateToProps)(Pokedex)