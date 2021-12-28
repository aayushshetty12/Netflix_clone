import React, { useState, Suspense } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../API/axios.js'
import '../StyleSheets/Details.css'
import profile from '../Images/profile.png'

function Cast({info}){
    console.log(info)
    return(
        <div className="cast">
            <img src={`http://image.tmdb.org/t/p/w500${info.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=profile}} alt={info.character}  />
            <h3>{info.name}</h3>
            <p>{info.character}</p>
        </div>
    )
}



function Details({movies,shows}) {
    let {title}=useParams()
    const [detail,setDetail]=useState([])
    const [credit, setCredit]=useState([])

       

    useEffect(()=>{
        async function fetchDetails(){
            const categ=movies?'movie':'tv'
            const getDetail= await axios.get(`${categ}/${title}?api_key=0432d863ea57369b328be50ca55c960c&language=en-US`)
            const getCredit= await axios.get(`${categ}/${title}/credits?api_key=0432d863ea57369b328be50ca55c960c&language=en-US`)
    
            setCredit(getCredit.data.cast)
            setDetail(getDetail.data)
            //console.log(getCredit.data.cast)
            }
            fetchDetails()
    },[title]);

    return (
    <Suspense fallback={<h1>Loading...</h1>}>   
        <div className='details'>
            <img className='details_bg' src={`http://image.tmdb.org/t/p/w1280${detail.backdrop_path}`} alt="" />
            <div className="about_outer">
            </div>
                <div className="content">
                    <div className="poster">
                        <img src={`http://image.tmdb.org/t/p/w500${detail.poster_path}`} alt="" />
                    </div>
                    
                        <div className="about_inner">
                            <h1 className='title'>{detail.title || detail.name}</h1>
                            <div className="overview">{detail.overview}</div>
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
                   
        </div>
    </Suspense>     
    )
}

export default Details
