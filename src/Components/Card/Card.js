import React,{useState, useEffect} from 'react'
import './Card.css'
import { imageUrl } from '../../Constants/Constants'
import axios from '../../axioss';
// import { action, original } from '../../url';


function Card(props) {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data.results);
    })
  })
  return (
    <div className='card'>
      <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
              <img src={imageUrl + obj.backdrop_path} alt={obj ? obj.name || obj.title : ""} className={props.isSmall ? 'smallPoster' : 'poster'} />

            )
          }
           
        </div>
        
    </div>
  )
}

export default Card