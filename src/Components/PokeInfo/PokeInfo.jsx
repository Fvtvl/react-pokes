import React from "react";
import  style from "./PokeInfo.module.css";
import cn from "classnames";
import { ProgressBar } from 'react-bootstrap';
import bar from 'bootstrap/dist/css/bootstrap.min.css';


export default function PokeInfo ({ data }) {
    return (
        <>
        {
    (!data) ? " " : (                                                                                                    
        <>
       <div className={cn(style.card,{
        [style.normal]: data.types[0].type.name === 'normal',
        [style.fire]: data.types[0].type.name === 'fire',
        [style.water]: data.types[0].type.name === 'water',
        [style.electric]: data.types[0].type.name === 'electric',
        [style.grass]: data.types[0].type.name === 'grass',
        [style.ice]: data.types[0].type.name === 'ice',
        [style.fighting]: data.types[0].type.name === 'fighting',
        [style.poison]: data.types[0].type.name === 'poison',
        [style.ground]: data.types[0].type.name === 'ground',
        [style.flying]: data.types[0].type.name === 'flying',
        [style.psychic]: data.types[0].type.name === 'psychic',
        [style.bug]: data.types[0].type.name === 'bug',
        [style.rock]: data.types[0].type.name === 'rock',
        [style.ghost]: data.types[0].type.name === 'ghost',
        [style.dragon]: data.types[0].type.name === 'dragon',
        [style.steel]: data.types[0].type.name === 'steel',
        [style.fairy]: data.types[0].type.name === 'fairy',
        [style.dark]: data.types[0].type.name === 'dark'

       })}>
       <h1 className={style.name}>{data.name}</h1>
        <img src={data.sprites.other.dream_world.front_default}></img>
        <div>
            {data.abilities.map(poke => {
                return <h2 className={style.skills}>{poke.ability.name}</h2>
            })}
        </div>
            <div>
            <h3 className={style.hp}>HP: {data.stats[0].base_stat}</h3>
            <div>
            <h3 className={style.stats}> Attack:   <ProgressBar className={style.bar} striped variant="danger" now={data.stats[1].base_stat} max={150} label={data.stats[1].base_stat}></ProgressBar></h3>
            <h3 className={style.stats}> Defense: <ProgressBar className={style.bar} striped variant="success" now={data.stats[2].base_stat} max={150} label={data.stats[2].base_stat}></ProgressBar></h3>
            <h3 className={style.stats}> Speed: <ProgressBar className={style.bar} striped variant="info" now={data.stats[5].base_stat} max={150} label={data.stats[5].base_stat}></ProgressBar></h3>
            </div>
        </div>
       </div>
        </>
     )
    }
        </>
    )
}