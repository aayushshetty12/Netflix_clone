import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from '../../Redux/Details/detail-actions'
import { bindActionCreators } from 'redux'
import Details from './Details.js'
import Modal from '../Modal/Modal.js'


function TVDetails() {

    let { title } = useParams()

    const dispatch = useDispatch()
    const { fetchDetails } = bindActionCreators(actionCreators, dispatch)
    const showModal = useSelector(state => state.show.showModal)

    useEffect(() => {
        fetchDetails(title, 'tv')
    }, [])

    return (
        <>
            <Details categ='tv' />
            {showModal && <Modal />}
        </>)
}

export default TVDetails
