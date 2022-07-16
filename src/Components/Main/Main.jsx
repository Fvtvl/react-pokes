import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { withLoyout } from "../Layout/Layout";
import { Button } from "../Button/Button";
import Modale from "../Modale/Modale";


function Main () {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [infoActive, setInfoActive] = useState(false);

    async function pokeFun () {
        setLoading(true)
        const response = await axios.get(url);
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        getPokemon(response.data.results);
        setLoading(false);
    }

    async function getPokemon(response) {
        response.map(async (item)=> {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a,b)=> a.id > b.id? 1: -1)
                return state;
            })
        })
    }
    
    useEffect(() => {
        pokeFun();
    },[url])

    return (
        <>
        <div>
            {prevUrl && <Button onClick={()=> {
                setPokeData([])
                setUrl(prevUrl)
            }}>Previous</Button>}

            <Button onClick={()=> {
                setPokeData([])
                setUrl(nextUrl)
            }}>Next</Button>
        </div>

        <a onClick={()=> setInfoActive(true)}>
        <Card pokemon ={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}></Card>
        </a>
        <div>
        <Modale data={pokeDex} active={infoActive} setActive={setInfoActive} />
        </div>
        </>
    )
};

export default withLoyout(Main);