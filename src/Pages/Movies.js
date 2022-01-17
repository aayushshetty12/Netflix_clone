import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
import MovieBanner from '../Components/Banner/MovieBanner'
import Body from '../Components/Body/Body.js'
import Modal from '../Components/Modal/Modal.js'
import * as actionCreators from '../Redux/Movies/movie-actions.js'

function Movies() {
    const dispatch = useDispatch()
    const { fetchMovieBanner, fetchMovieData } = bindActionCreators(actionCreators, dispatch)
    const showModal = useSelector(state => state.movie.showModal)
    //console.log(showModal)

    useEffect(() => {
        fetchMovieBanner()
        fetchMovieData()
    }, [])

    return (
        <div>
            <MovieBanner />
            <Body movies />
            {showModal && <Modal />}

        </div>
    )
}

export default Movies
