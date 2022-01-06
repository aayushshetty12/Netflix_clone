import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieBanner from '../Components/Banner/MovieBanner'
import Body from '../Components/Body/Body.js'
import * as actionCreators from '../Redux/Movies/movie-actions.js'

function Movies() {
    const dispatch= useDispatch()
    const {fetchBanner,fetchData}=bindActionCreators(actionCreators,dispatch)

     useEffect(()=>{
        fetchBanner() 
        fetchData()      
     },[])
     
    return (
        <div>
            <MovieBanner/>
            <Body movies/>           
        </div>
    )
}

export default Movies
