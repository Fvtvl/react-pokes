import PokeInfo from "../PokeInfo/PokeInfo";
import React from "react";



export default function Winner ({ infoFirst, infoSecond }) {
        if(infoFirst.stats[1].base_stat * infoFirst.abilities.length - infoSecond.stats[2].base_stat - infoSecond.stats[0].base_stat > infoSecond.stats[1].base_stat * infoSecond.abilities.length - infoFirst.stats[2].base_stat - infoFirst.stats[0].base_stat)
        return (
            <>
            <PokeInfo data={infoFirst}></PokeInfo>
            </>
        )
        return (
            <>
            <PokeInfo data={infoSecond}></PokeInfo>
            </>
        )
    }