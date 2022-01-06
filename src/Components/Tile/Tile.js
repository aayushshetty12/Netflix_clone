import React from 'react'
import {Link} from 'react-router-dom';
import {image_url} from '../../API/requests.js'
import './Tile.css'

function Tile({item,categ}) {
    //console.log(props.path)
    return (
        <Link to={`/${categ}/${item.id}`}>
            <div className='tile'>
                <img src={`${image_url}w1280${item.poster_path}`} alt={item.name} />
            </div>
        </Link>         
    )
}

export default Tile
