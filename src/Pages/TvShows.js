import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux'
import TvBanner from '../Components/Banner/TvBanner'
import Body from '../Components/Body/Body.js'
import Modal from '../Components/Modal/Modal.js'
import * as actionCreators from '../Redux/Shows/tv-actions.js'

function TvShows() {

    const dispatch = useDispatch()
    const { fetchTvBanner, fetchTvData } = bindActionCreators(actionCreators, dispatch)
    const showModal = useSelector(state => state.show.showModal)
    //console.log(showModal)

    useEffect(() => {
        fetchTvBanner()
        fetchTvData()
    }, [])

    return (
        <div>
            <TvBanner />
            <Body tv />
            {showModal && <Modal />}
        </div>
    )
}

export default TvShows
