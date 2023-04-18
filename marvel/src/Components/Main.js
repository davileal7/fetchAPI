import React, { useEffect, useState } from "react";
import { Card } from './Card';
import axios from "axios";
export const Main = () => {
    const [url,setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c3a6468ccae46a0ba6fd097c1ccd277a&hash=6167bdd2c76eb272b03a06d2fe2954e4")
    const [item,setItem]=useState();


    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    },[url])
    return (
        <>
        <div className="header">
            <div className="bg">
                <img src="./Imagens/bg.png" alt=""/> 
            </div>
           
        </div>
        <div className="content">
           {
            (!item?<p>Not Found</p>:<Card data={item}/>)
           }
        </div>
        </>
    )
}