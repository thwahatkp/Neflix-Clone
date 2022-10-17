import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axioss'
import { API_KEY , imageUrl} from '../../Constants/Constants'
import './Banner.css'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[4])
    })

  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""} )`}}
     className='banner'>
      {/* <img src={movie ? imageUrl+movie.backdrop_path : ""} alt="Loading..." /> */}
        <div className="content">
            <h1 className="title">{movie ? movie.name : ""}</h1>
            <div className="bannerButtons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fadeBottom"></div>

    </div>
  )
}

export default Banner