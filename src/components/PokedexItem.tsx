import React, { useState, useEffect } from 'react';
import {Pokemon} from "../utils/interfaces/pokemon";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import interrogacion from '../assets/interrogacion.png';


interface Props {
pokemon?:Pokemon
}

const PokedexItem:React.FC<Props> = (props) => {

    return (
        <Card >
            <div>
                <div >
                    {(props.pokemon)?(
                        <img style={imgStyle} src={props.pokemon.sprites.front_default} />
                        ):(
                            <img style={unkownStyle}  src={interrogacion}/>
                        )}
                </div>
                <CardContent style={{ padding: "0 10px" }}>
                    {(props.pokemon)?(
                    <Typography align="center" gutterBottom variant="h6">
                        {props.pokemon.name}
                    </Typography>):null}
                </CardContent>
            </div>
        </Card>
    );
}

const imgStyle:React.CSSProperties = {
    height:"96px",
    width:"96px"
}

const unkownStyle:React.CSSProperties= {
    height:"40px",
    width:"40px"
}
export default React.memo(PokedexItem);