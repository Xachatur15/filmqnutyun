import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";



function Card({populary}) {
    const img_url = "https://image.tmdb.org/t/p/w500";
    return (
      <Link to={`./single/${populary.id}`} className='w-[400px] h-[600px] '>
        <img src={img_url+populary.poster_path}className='w-[400px] h-[500px] '  />
        <h1 className='text-3xl text-white'> {populary.original_title} </h1>
         <p  className='text-white text-2xl '> {populary.release_date} </p>
      </Link>
      
    )
    
  }
  
export default Card