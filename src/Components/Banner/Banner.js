import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="bannerButtons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum aut cupiditate reiciendis, laudantium iste aspernatur. Tempora vero nobis labore.</h1>
        </div>
        <div className="fadeBottom"></div>

    </div>
  )
}

export default Banner