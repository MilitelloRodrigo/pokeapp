import React from "react";
import background from "../assets/background.png"

interface Props {

}

const BattleGround:React.FC<Props> = (props) => {

    return <img
        src={background}
        style={style}
        alt={"fondo"}
    />

}

const style:React.CSSProperties = {
    position: "fixed",
    zIndex: -1,
    height: "80%",
    width: "100%",
}



export default BattleGround