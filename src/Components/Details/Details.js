import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { image_url } from '../../API/requests.js'
import './Details.css'
import Cast from './Cast.js'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import * as actionCreators from '../../Redux/Modal/modal-actions'
import star from '../../Images/star.png'

function Details({ categ }) {
    const dispatch = useDispatch()
    const { showModal } = bindActionCreators(actionCreators, dispatch)

    const { about, credit } = useSelector(state => state.details)

    return (
        (about.length !== 0 && credit.length !== 0) &&
        (<div className='details'>
            <img className='details_bg' src={`${image_url}w1280${about.backdrop_path}`} alt="" />
            <div className="content">
                <div className="poster">
                    <img src={`${image_url}w1280${about.poster_path}`} alt="" />
                </div>
                <div className="about">
                    <h1 className='title'>{about.title || about.name}</h1>
                    <div className="overview">{about.overview}</div>
                    <div className="rating">
                        <div className="rate">
                            <img src={star} alt="" />
                            <p>{about.vote_average}</p>
                        </div>
                        <div className="watch">
                            <button onClick={() => showModal(about.id, categ)}><PlayArrowRoundedIcon className='svg_icons' />Watch</button>
                        </div>
                    </div>
                    <h2><u>Cast</u></h2>
                    <div className="credit">
                        {credit.map(info =>
                            <Cast
                                info={info}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default Details
