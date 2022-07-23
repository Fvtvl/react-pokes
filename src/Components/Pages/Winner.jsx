import PokeInfo from "../PokeInfo/PokeInfo";
import React from "react";
import style from "../Modale/Modale.module.css"



export default function Winner ({ infoFirst, infoSecond, active , setActive }) {
        if(infoFirst.stats[1].base_stat * infoFirst.abilities.length - infoSecond.stats[2].base_stat - infoSecond.stats[0].base_stat > infoSecond.stats[1].base_stat * infoSecond.abilities.length - infoFirst.stats[2].base_stat - infoFirst.stats[0].base_stat)
        return (
            <>
        <div className={active ? style.containerActive : style.container} onClick={()=> setActive(false)}>
        <div className={active ? style.contantActive : style.contant} onClick={(e)=> e.stopPropagation()}>
       <PokeInfo data={infoFirst}></PokeInfo>
        </div>
        </div>
        </>
        )
        return (
            <>
        <div className={active ? style.containerActive : style.container} onClick={()=> setActive(false)}>
        <div className={active ? style.contantActive : style.contant} onClick={(e)=> e.stopPropagation()}>
       <PokeInfo data={infoSecond}></PokeInfo>
        </div>
        </div>
            </>
        )
    }