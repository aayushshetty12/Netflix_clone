import React from 'react'
import { Link } from 'react-router-dom';
import { image_url } from '../../API/requests.js'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './Tile.css'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../Redux/Modal/modal-actions'

function Tile({ item, categ }) {
    //console.log(props.path)

    const dispatch = useDispatch()
    const { showModal } = bindActionCreators(actionCreators, dispatch)
    //console.log(actionCreators)

    return (
        <div className="tile_container">
            <div className='tile_outer'>
                <Link to={`/${categ}/${item.id}`}>
                    <div className='tile_inner'>
                        <img src={`${image_url}w500${item.poster_path}`} alt={item.name} />
                    </div>
                </Link>
                <div className="play" >
                    <div className="play_fade"></div>
                    <div className="play_btn">
                        <PlayCircleIcon className='svg_icons' onClick={() => showModal(item.id, categ)} />
                        <h3>PLAY</h3>
                    </div>
                </div>
            </div>
            <p className='tile_name'>{item.title || item.name}</p>
        </div>

    )
}

export default Tile
