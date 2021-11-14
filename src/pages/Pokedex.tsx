import React from "react";
import {ReducerTypes} from "../utils/redux/Reducer";
import {useDispatch} from "react-redux";
import {State} from "../utils/redux/InitialState";

interface Props {}

const Pokedex:React.FC<Props> = (props) => {
    const dispatch = useDispatch();

    let state = dispatch({type: ReducerTypes.GETALL})
    console.log(state)
    return <>Esta es mi pokedex</>

}

export default Pokedex