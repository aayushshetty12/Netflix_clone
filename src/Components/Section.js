import React, {useState, useEffect} from 'react'
import '../StyleSheets/Section.css'
import {movie_requests, tv_requests} from '../API/requests.js'
import axios from '../API/axios.js'
import Tile from './Tile.js'


function Section({request,movies,shows}) {

    const [list,setList]=useState()
    
    useEffect(()=>{
        const fetchMovies=async ()=>{
            const get=await axios.get(movie_requests[request])
            //console.log(get.data.results)
            setList(get.data.results)
        }
        const fetchShows=async ()=>{
            const get=await axios.get(tv_requests[request])
            console.log(get.data.results)
            setList(get.data.results)
        }
        movies?fetchMovies():fetchShows()
    },[])

    return (
        <div className='section'>
            <h2 className='title'>{request}</h2>
            <div className="scroll">
            {list && list.map(movie=> 
            movies?(<Tile
                key={movie.id} 
                id={movie.id}
                path={movie.poster_path}
                name={movie.title} 
                movies               
            />):
                 (<Tile
                key={movie.id} 
                id={movie.id}
                path={movie.poster_path}
                name={movie.name} 
                shows               
            />)  
           )}
            </div>
        </div>
    )
}

export default Section
