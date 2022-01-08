import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Search.css'
import {image_url} from '../../API/requests.js'

function Search() {
    
    const {data,query}=useSelector(state=>state.search)
    //console.log(page)

    return (
        <div className='search_container'>
            <div className='search'>
                <p className='heading'>Showing Results for '{query}'</p>
                <div className="results">
                    {data.map(item=>item.poster_path && 
                    <div>
                        <Link to={`/${item.media_type}/${item.id}`}><img src={`${image_url}w300${item.poster_path}`} alt="" /></Link>
                        <p>{item.title || item.name}</p>
                    </div>)}
                </div>
            </div>   
        </div>
    )
}

export default Search
