import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import './Header.css'
import netflix from '../../Images/netflix.png' 
import * as actionCreators from '../../Redux/Search/search-actions'

export default function Header() {

    const [query,setQuery]=useState()
    const dispatch=useDispatch()
    const {searchData}=bindActionCreators(actionCreators, dispatch)

    return (
        <div className='header'>        
            <div className="navigation">
                <Link to='/' ><img className='logo' src={netflix} alt="netflix" /></Link>
                <Link className='link' to="/movies">Movies</Link>
                <Link className='link' to="/shows">TV Shows</Link>
            </div>
            <div className="searchbar">
                <input type="text" placeholder='Movies, TV shows...' onChange={e=>setQuery(e.target.value)}/>
                <Link to='/search'><button onClick={()=>searchData(query)}><FontAwesomeIcon icon={faSearch} /></button></Link>
            </div>
                
        </div>
    )
}
