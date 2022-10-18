import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from '../../axioss'
import { API_KEY, imageUrl } from '../../Constants/Constants'
import './Banner.css'
let Rating = null
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
      // console.log(response.data.results[0]);
      let showing = 0
      setMovie(response.data.results[showing])
      // console.log(response.data.results[showing]);
      if (response.data.results[showing].vote_average > parseInt(response.data.results[showing].vote_average) + .500) {
        Rating = parseInt(response.data.results[showing].vote_average) + .5
      } else {
        Rating = parseInt(response.data.results[showing].vote_average)
      }
    })
  }, [])
  return (
    <div
      style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""} )` }}
      className='banner'>
      <div className="content">
        <h1 className="title">{movie ? movie.name || movie.title : ""}</h1>

        <h3 className="ratingStar"> Rating <i className="fas fa-star"></i> : {movie ? Rating : ""}</h3>
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