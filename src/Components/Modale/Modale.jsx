import React from "react";
import PokeInfo from "../PokeInfo/PokeInfo";
import  style from "./Modale.module.css";


export default function Modale ({ data,active , setActive }) {
    return (
        <>
        <div className={active ? style.containerActive : style.container} onClick={()=> setActive(false)}>
        <div className={active ? style.contantActive : style.contant} onClick={(e)=> e.stopPropagation()}>
       <PokeInfo data={data}></PokeInfo>
        </div>
        </div>
        </>
    )
}


