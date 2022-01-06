import React from 'react'
import { useSelector } from 'react-redux'
import {image_url} from '../../API/requests.js'
import './Details.css'
import Cast from './Cast.js'

function Details({movies,tv}) {
       
    const {about, credit}= useSelector(state=>state.details)
    //console.log(about)
    
    return (
        (about.length!==0 && credit.length!==0) && (<div className='details'>
            <img className='details_bg' src={`${image_url}w1280${about.backdrop_path}`} alt="" />
            <div className="about_outer">
            </div>
                <div className="content">
                    <div className="poster">
                        <img src={`${image_url}w1280${about.poster_path}`} alt="" />
                    </div>            
                        <div className="about_inner">
                            <h1 className='title'>{about.title || about.name}</h1>
                            <div className="overview">{about.overview}</div>
                            <h2><u>Cast</u></h2>
                            <div className="credit">
                                {credit.map(info=>
                                 <Cast 
                                     info={info}
                                 />
                                )}
                            </div>
                        </div>
                    </div>
                   
        </div>)
    )
}

export default Details
