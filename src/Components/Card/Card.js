import React,{useState, useEffect} from 'react'
import './Card.css'
import { imageUrl,API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube';
import axios from '../../axioss';
// import { action, original } from '../../url';


function Card(props) {
  const [movies,setMovies] = useState([])
  const [trailer,setTrailer] = useState('')
  let flag = 0;
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
      console.log(response.data.results);
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if(response.data.results.length !== 0){
      setTrailer(response.data.results[0],flag = 1)
      }else{
        alert("sorry movie related videos not found")
      } 
      console.log(response.data.results[0],flag);

    })
  }
  return (
    <div className='card'>
      <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
              <img src={imageUrl + obj.backdrop_path} onClick={()=>handleMovie(obj.id)} alt={obj ? obj.name || obj.title : ""} className={props.isSmall ? 'smallPoster' : 'poster'} />

            )
          }
           
        </div>
        {trailer && <YouTube opts={opts} videoId={trailer.key} />}
    </div>
  )
}

export default Card