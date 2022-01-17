import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { image_url } from '../../API/requests.js'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../Redux/Modal/modal-actions'
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import './Banner.css'

function MovieBanner() {

    let banner = useSelector(state => state.movie.movieBanner)

    const dispatch = useDispatch()
    const { showModal } = bindActionCreators(actionCreators, dispatch)

    return (
        banner && <div className='banner' >
            <img src={`${image_url}w1280${banner.backdrop_path}`} alt={banner.title} />
            <div className="banner_content">
                <div className="banner_title">
                    <h1>{banner.title}</h1>
                </div>
                <div className="banner_descr">
                    {(banner.overview.length > 180 ? banner.overview.substr(0, 250) + '...' : banner.overview)}
                </div>
                <div className="banner_btns">
                    <button onClick={() => showModal(banner.id, 'movie')}><PlayArrowRoundedIcon />Play</button>
                    <Link to={`/movie/${banner.id}`} style={{ textDecoration: 'none' }}>
                        <button><ReadMoreRoundedIcon />Read More</button>
                    </Link>
                </div>
            </div>
            <div className="banner_fade"></div>
        </div>
    )
}

export default MovieBanner
