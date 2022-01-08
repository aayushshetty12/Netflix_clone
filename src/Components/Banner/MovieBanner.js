import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {image_url} from '../../API/requests.js'
import './Banner.css'

function MovieBanner() {
    
    let banner=useSelector(state=>state.movie.movieBanner)
   
    return (   
        <div className='banner' >
             <img src={`${image_url}w1280${banner.backdrop_path}`} alt={banner.title} />
             <div className="banner_content">
                <div className="banner_title">
                    <h1>{banner.title}</h1>
                </div>
                <div className="banner_descr">
                    {(banner.length!==0) && (banner.overview.length>180? banner.overview.substr(0,250) + '...':banner.overview  )}
                </div>
                <Link to={`/movie/${banner.id}`}>
                    <button>PLAY</button>
                </Link>              
            </div>
            {/* <div className="banner_fade">ccccccc</div>           */}

        </div>
    )
}

export default MovieBanner
