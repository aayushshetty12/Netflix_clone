import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { image_url } from '../../API/requests.js'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../Redux/Modal/modal-actions'
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

import './Banner.css'

function ShowBanner() {

    const banner = useSelector(state => state.show.tvBanner)

    const dispatch = useDispatch()
    const { showModal } = bindActionCreators(actionCreators, dispatch)
    //console.log(banner.id)

    return (
        banner && <div className='banner' >
            <img src={`${image_url}w1280${banner.backdrop_path}`} alt={banner.name} />
            <div className="banner_content">
                <div className="banner_title">
                    <h1>{(banner.name)}</h1>
                </div>
                <div className="banner_descr">
                    {(banner.overview.length > 180 ? banner.overview.substr(0, 250) + '...' : banner.overview)}
                </div>
                <div className="banner_btns">
                    <button onClick={() => showModal(banner.id, 'tv')}><PlayArrowRoundedIcon />Play</button>
                    <Link to={`/tv/${banner.id}`} style={{ textDecoration: 'none' }}>
                        <button><ReadMoreRoundedIcon />Read More</button>
                    </Link>
                </div>
            </div>
            <div className="banner_fade"></div>
        </div>
    )
}

export default ShowBanner
