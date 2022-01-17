import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from '../../Redux/Details/detail-actions'
import { bindActionCreators } from 'redux'
import Details from './Details.js'
import Modal from '../Modal/Modal.js'
function MovieDetails() {

    let { title } = useParams()

    const dispatch = useDispatch()
    const { fetchDetails } = bindActionCreators(actionCreators, dispatch)
    const showModal = useSelector(state => state.movie.showModal)

    useEffect(() => {
        fetchDetails(title, 'movie')
    }, [])

    return (
        <>
            <Details categ='movie' />
            {showModal && <Modal />}
        </>
    )
}

export default MovieDetails
