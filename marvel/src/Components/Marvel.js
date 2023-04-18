import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const Marvel = () => {
    const {id}=useParams();
    const [item,setItem]=useState();
    const fetch=async()=>{
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=c3a6468ccae46a0ba6fd097c1ccd277a&hash=6167bdd2c76eb272b03a06d2fe2954e4`)
        setItem(res.data.data.results[0])
    }
    fetch();
  return (
    <>
    {
       (!item)? "":(
        <div className='box-content'>
            <div className='right-box'>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='' />

            </div>
            <div className='left-box'>
                <h1>{item.name}</h1>
                <h4>{item.description}</h4>

            </div>
        </div>

       )
    }
    </>
  )
}
