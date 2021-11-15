import React from "react";

interface Props {

}

const BattleMenu:React.FC<Props> = (props) => {

    return (
        <div style={style}>
            {props.children}
        </div>
    );

}

const style:React.CSSProperties = {
    position: "absolute",
    bottom: "1%",
    background: "white",
    height: "20%",
    width: "97%",
    border: "solid 4px",
    borderRadius: "12px",
    borderColor: "black",
    left: "50%",
    transform: "translate(-50%)",
    padding: 10
}
export default BattleMenu