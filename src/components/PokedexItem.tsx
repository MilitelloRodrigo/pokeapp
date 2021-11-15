import React, { useState, useEffect } from 'react';
import {Pokemon} from "../utils/interfaces/pokemon";
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import interrogacion from '../assets/interrogacion.png';
import pokeball from '../assets/pokeball.jpg'


interface Props {
pokemon?:Pokemon,
    id:number
}

const PokedexItem:React.FC<Props> = (props) => {

    return (
            <Card style={cardStyle} sx={{ maxWidth: 345 }}>
                {(props.pokemon)?
                    (<CardMedia
                        component="img"
                        height="194px"
                        width="194px"
                        alt={props.pokemon.name}
                        image={props.pokemon.sprites.front_default}
                        style={(props.pokemon.catched)? Style : Gray}
                    />):(
                    <CardMedia
                        component="img"
                        width="194px"
                        height="194px"
                        image={interrogacion}
                        />)
                }
                <CardContent>
                    {(props.pokemon)?
                        (<>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.pokemon.id }-{props.pokemon?.name}
                            {(props.pokemon?.catched)?<>-  <img style={pokeballStyle} src={pokeball}/> </>: null}
                            </Typography>
                        </>):(
                        <Typography gutterBottom variant="h5" component="div">
                            {props.id}-Desconocido
                        </Typography>)}
                </CardContent>
            </Card>
    );
}
const cardStyle:React.CSSProperties = {
    width: "18%",
    minWidth: "194px",
    padding: "1%"
}
const pokeballStyle:React.CSSProperties = {
    width: "20px",
    height:"20px",
}
const Gray:React.CSSProperties = {
    filter:"grayscale(1)"
}
const Style:React.CSSProperties = {

}


export default React.memo(PokedexItem);