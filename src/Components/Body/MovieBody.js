import React from 'react'
import { useSelector } from 'react-redux'
import './Body.css'
import Tile from '../Tile/Tile.js'

function MovieBody({item}) {

    const {title,start,end}=item
    
    let dataMovie= useSelector(state=>state.movie.movieData)
    dataMovie=dataMovie.slice(start,end)
    
    return (
        <div className='section'>
            <div className="head">
                <h2 className='title'>{title}</h2>
                {/* <button>View All</button> */}
            </div>
            <div className="scroll">
                {dataMovie.map(item=>
                    <Tile
                        item={item}
                        categ='movie'
                    />
                    )
                }
            </div>
        </div>
    )
}

export default MovieBody
