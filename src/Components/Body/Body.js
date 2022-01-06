import React from 'react'
import MovieBody from './MovieBody.js'
import TvBody from './TvBody.js'
import {collection} from '../../Redux/collection.js'

function Body({movies,tv}) {
    return (
        <>
        {movies? 
            (collection.map(item=>
            <MovieBody
            item={item}
             />
             ))
        : 
            (collection.map(item=>
            <TvBody
            item={item}
             />
             ))
        }
            
        </>
        
    )
}

export default Body
