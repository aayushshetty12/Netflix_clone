import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {image_url} from '../../API/requests.js'
import './Banner.css'

function ShowBanner() {

    const banner=useSelector(state=>state.show.tvBanner)
    //console.log(banner)
    return (
        (<div className='banner' >
            <img src={`${image_url}w1280${banner.backdrop_path}`} alt="dddd" />
            <div className="banner_content">
                <div className="banner_title">
                    <h1>{(banner.name)}</h1>
                </div>
                <div className="banner_descr">
                    {(banner.length!==0) && (banner.overview.length>180? banner.overview.substr(0,250) + '...':banner.overview  )}
                </div>
                <Link to={`/tv/${banner.id}`}>
                    <button>PLAY</button>
                </Link>
                {/* <div className="banner_fade">ccccccc</div> */}
            </div>
            
        </div>)
    )
}

export default ShowBanner
