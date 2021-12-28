import React from 'react'
import {Link} from 'react-router-dom';
import '../StyleSheets/Section.css'

function Tile({movies,shows,...props}) {
    //console.log(props.path)
    return (
        <Link to={movies?`/movies/${props.id}`:`/tv/${props.id}`}>
            <div className='tile'>
            <img src={`http://image.tmdb.org/t/p/w1280${props.path}`} alt={props.name} />
            {/* <p>{props.name}</p> */}
        </div>
        </Link>
        
        
    )
}

export default Tile
