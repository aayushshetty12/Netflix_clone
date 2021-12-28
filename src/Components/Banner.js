import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../StyleSheets/Banner.css'
import axios from '../API/axios.js'
import {movie_requests,tv_requests} from '../API/requests.js'

function Banner({movies,shows}) {

    const [banner,setBanner]=useState();

    useEffect(()=>{
        const fetchMovie=async ()=>{
            const get= await axios.get(movie_requests.Trending)
            let index=Math.floor(Math.random()*get.data.results.length)
            setBanner(get.data.results[index])
            //console.log(get.data.results[index])
            
        }
        const fetchShows=async ()=>{
            const get= await axios.get(tv_requests.Trending)
            let index=Math.floor(Math.random()*get.data.results.length)
            setBanner(get.data.results[index])
            //console.log(get.data.results[index])
            
        }
        movies?fetchMovie():fetchShows();
    },[])

    return (
        
        (<div className='banner' >
            <img src={banner && `http://image.tmdb.org/t/p/w1280${banner.backdrop_path}`} alt="" />
            <div className="banner_content">
                <div className="banner_title">
                    <h1>{banner && (banner.name || banner.title)}</h1>
                </div>
                <div className="banner_descr">
                    {banner && (banner.overview.length>180? banner.overview.substr(0,250) + '...':banner.overview  )}
                </div>
                {banner &&  <Link to={movies?`/movies/${banner.id}`:`/tv/${banner.id}`}>
                    <button>Play</button>
                </Link>
                }
                
                {/* <div className="banner_fade">ccccccc</div> */}

            
            </div>
            
        </div>)
    )
}

export default Banner
