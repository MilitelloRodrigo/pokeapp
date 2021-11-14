import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReducerTypes} from "../utils/redux/Reducer";
interface Props {}

const Home:React.FC<Props> = (props) => {

  const dispatch = useDispatch();
  const clickHander = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault()
    dispatch({type:ReducerTypes.SEE, payload: 'Hola Mundo'})
    console.log('hola mundo')
  }

  return <>Hola mundo
  <button onClick={clickHander}>Probando Dispatcher</button>

  </>

}

export default Home