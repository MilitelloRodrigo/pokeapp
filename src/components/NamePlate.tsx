import React from "react";
import {Pokemon} from "../utils/interfaces/pokemon";

interface Props {
    pokemon:Pokemon
}

const Nameplate: React.FC<Props> = (props) => {
    return (
        <div
            className="stats"
            style={style}
        >
            <div className="top">
        <span className="name" style={{ fontWeight: "bold" }}>
          {props.pokemon.name.toUpperCase()}
        </span>
                <div>
                    <span className="id"> ID: {props.pokemon.id}</span>
                </div>
            </div>
        </div>
    );
};

const style: React.CSSProperties = {
    position: "absolute",
    top: "96px",
    left: "40px",
    width: "320px",
    background: "#111",
    border: "2px solid black",
    borderRadius: "8px",
    color: "white",
    padding: "12px",
    fontFamily: "monospace",
    fontSize: "20px",
}

export default Nameplate;