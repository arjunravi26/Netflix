import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { APL_KEY,imageurl } from '../../const/const'
function Banner() {
 const [movie,setMovie] =useState()

  useEffect(() => {
   axios.get(`trending/all/week?api_key=${APL_KEY}&language=en-US`).then((response)=>{
    console.log(response.data.results);
    var num=Math.floor(Math.random() * 20);
    setMovie(response.data.results[num])
   })
  }, []);

  return (
    <div style={{backgroundImage:`url(${movie?imageurl+movie.backdrop_path:""})`}}
     className='banner'>
        <div className='content'>
           <h1 className='title'>{movie? movie.title: ""}</h1>
           <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
           </div>
         <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
