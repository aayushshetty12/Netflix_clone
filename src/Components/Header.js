import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from 'react-router-dom'
import '../StyleSheets/Header.css'
import netflix from '../Images/netflix.png' 
export default function Header() {
    return (
        <div className='header'>        
            <div className="navigation">
                <Link to='/' ><img className='logo' src={netflix} alt="netflix" /></Link>
                <Link className='link' to="/movies">Movies</Link>
                <Link className='link' to="/shows">TV Shows</Link>
            </div>
            <div className="search">
                <input type="text" placeholder='Movies, TV shows...'/>
                <button><FontAwesomeIcon icon={faSearch} /></button>
            </div>
                
        </div>
    )
}
