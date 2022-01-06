import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Search.css'

function Search() {

    const {data,query}=useSelector(state=>state.search)
    //console.log(data)
    return (
        <div className='search'>
            <p className='heading'>Showing Results for '{query}'</p>
            <div className="results">
                {data.map(item=>item.poster_path && <Link to={`/${item.media_type}/${item.id}`}><img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" /></Link>)}
            </div>
        </div>
    )
}

export default Search
