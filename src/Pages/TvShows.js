import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import TvBanner from '../Components/Banner/TvBanner'
import Body from '../Components/Body/Body.js'
import * as actionCreators from '../Redux/Shows/tv-actions.js'

function TvShows() {

    const dispatch=useDispatch()
    const {fetchBanner, fetchData}=bindActionCreators(actionCreators, dispatch)
    useEffect(()=>{
        fetchBanner()
        fetchData()
    },[])

    return (
        <div>
            <TvBanner/>
            <Body tv/>
        </div>
    )
}

export default TvShows
