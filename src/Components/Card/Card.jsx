import React from "react";
import style from "./Card.module.css";
import cn from "classnames";

export default function Card ({pokemon, loading, infoPokemon}) {
    return (
        <ul className={style.container}>
        {
            loading ? <h1>Loading...</h1> :
            pokemon.map((item) => {
                const type = item.types[0].type.name;
                return (
                    <>
                    <li  className={cn(type, style.card, {
                        [style.normal]: type === 'normal',
                        [style.fire]: type === 'fire',
                        [style.water]: type === 'water',
                        [style.electric]: type === 'electric',
                        [style.grass]: type === 'grass',
                        [style.ice]: type === 'ice',
                        [style.fighting]: type === 'fighting',
                        [style.poison]: type === 'poison',
                        [style.ground]: type === 'ground',
                        [style.flying]: type === 'flying',
                        [style.psychic]: type === 'psychic',
                        [style.bug]: type === 'bug',
                        [style.rock]: type === 'rock',
                        [style.ghost]: type === 'ghost',
                        [style.dragon]: type === 'dragon',
                        [style.steel]: type === 'steel',
                        [style.fairy]: type === 'fairy',
                        [style.dark]: type === 'dark'

                    })} key={item.id} onClick={()=> infoPokemon(item)}>
                        <img src={item.sprites.other.dream_world.front_default}></img>
                        <h2>{item.name}</h2>
                        <h3>{type}</h3>
                    </li>
                    </>
                )
            })
        }
        </ul>
    )

}