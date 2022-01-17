import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../Redux/Modal/modal-actions'
import { Link } from 'react-router-dom'
import { image_url } from '../../API/requests.js'
import './SearchTile.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function SearchTile({ item }) {

    const dispatch = useDispatch()
    const { showModal } = bindActionCreators(actionCreators, dispatch)

    return (

        <div className='search_tile'>
            <div className="search_img">
                <div className="search_play">
                    <PlayCircleIcon className='svg_icons' onClick={() => showModal(item.id, item.media_type)} />
                    <h3>PLAY</h3>
                </div>
                <Link to={`/${item.media_type}/${item.id}`}>
                    <img src={`${image_url}w300${item.poster_path}`} alt="" />
                </Link>
            </div>
            <p>{item.title || item.name}</p>
        </div>

    )
}

export default SearchTile
