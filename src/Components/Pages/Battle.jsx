import axios from "axios";
import React, { useEffect, useState } from "react";
import { withLoyout } from "../Layout/Layout";
import { Button } from "../Button/Button";
import style from "../Pages/Battle.module.css"
import PokeInfo from "../PokeInfo/PokeInfo";
import Winner from "./Winner";
import { Spinner } from "../Spinner/Spinner";




function Battle () {
    const [loading, setLoading] = useState(true);
    const [pokeFirst, setPokeFirst] = useState();
    const [pokeSecond, setPokeSecond] = useState();
    const [battle, setBattle] = useState(false);
    const [infoActive, setInfoActive] = useState(false);
    const [inputFirst, setInputFirst] = useState('');
    const [inputSecond, setInputSecond] = useState('');


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

    useEffect(() => {
        setBattle(false);
        setInputFirst('');
        setInputSecond('');
    }, [infoActive])
    
    return (
        <>

        <div className={style.button}>
        <Button onClick={()=> getPokeFirst(getRandom()) && setBattle(false)}>Get Random 1st</Button>
        <Button onClick={()=> getPokeSecond(getRandom()) && setBattle(false)}>Get Random 2nd</Button>
        </div>

        <div className={style.input}>
        <input className={style.inputBase} value={inputFirst}
        onChange={e => setInputFirst(e.target.value)}
        placeholder='1st Poke Number and Enter'
        onKeyPress={(e) => {
            if (e.key === "Enter") {
        getPokeFirst(inputFirst) && setBattle(false)}}}>
        </input>

        <input className={style.inputBase} value={inputSecond}
        onChange={e => setInputSecond(e.target.value)}
        placeholder='2nd Poke Number and Enter'
        onKeyPress={(e) => {
            if (e.key === "Enter") {
        getPokeSecond(inputSecond) && setBattle(false)}}}>
        </input>
        </div>
    

        <div className={style.card}>
        <PokeInfo data={pokeFirst}></PokeInfo>
        <div className={style.fight}>
        {pokeFirst && pokeSecond && <Button onClick={()=> setTimeout(()=>{setInfoActive(true)}, 1500) && setBattle(true)}>Fight</Button>}
        {battle ? <Spinner></Spinner> : null}
        </div>
        <PokeInfo data={pokeSecond}></PokeInfo>
        </div>


        

        {infoActive && <Winner infoFirst={pokeFirst} infoSecond={pokeSecond} active={infoActive} setActive={setInfoActive}></Winner>}

        
        
        </>
    )
};

export default withLoyout(Battle);