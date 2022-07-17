import axios from "axios";
import React, { useState } from "react";
import { withLoyout } from "../Layout/Layout";
import { Button } from "../Button/Button";
import style from "../Pages/Battle.module.css"
import { Input } from "../Input/Input";
import PokeInfo from "../PokeInfo/PokeInfo";
import Winner from "./Winner";



function Battle () {
    const [loading, setLoading] = useState(true);
    const [pokeFirst, setPokeFirst] = useState();
    const [pokeSecond, setPokeSecond] = useState();
    const [showWinner, setShowWinner] = useState(false);
    const [btn, setBtn] = useState('Fight')


    async function getPokeFirst (name) {
        setLoading(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokeFirst(response.data);
        setLoading(false);
    }

    async function getPokeSecond (name) {
        setLoading(true)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokeSecond(response.data);
        setLoading(false);
    }

    function getRandom () {
        return Math.floor(Math.random() * 600);
    }

    return (
        <>

       <div className={style.container}>
       <div>
            <Button onClick={()=> getPokeFirst(getRandom()) && setShowWinner(false)}>Get Random 1st</Button>
            <Input></Input>
            <PokeInfo data={pokeFirst}></PokeInfo>
            </div>
        <div className={style.fight}>
        {pokeFirst && pokeSecond && <Button onClick={()=> setTimeout(()=>{setShowWinner(true)}, 1300)} >{btn}</Button>}
        <div className={style.winner}>
        {showWinner && <Winner infoFirst={pokeFirst} infoSecond={pokeSecond}></Winner>}
        </div>
        </div>
            <div>
            <Button onClick={()=> getPokeSecond(getRandom()) && setShowWinner(false)}>Get Random 2st</Button>
            <Input></Input>
            <PokeInfo data={pokeSecond}></PokeInfo>
        </div>
       </div>
        </>
    )
};

export default withLoyout(Battle);