import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as actionCreators from '../../Redux/Details/detail-actions'
import { bindActionCreators } from 'redux'
import Details from './Details.js'

function MovieDetails() {

    let {title}=useParams()

    const dispatch = useDispatch()
    const {fetchDetails}=bindActionCreators(actionCreators, dispatch)

    useEffect(()=>{
        fetchDetails(title,'movie')
    },[])

    return (
        <Details movie/>
    )
}

export default MovieDetails
