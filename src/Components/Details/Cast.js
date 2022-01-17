import React from 'react'
import profile from '../../Images/profile.png'
import { image_url } from '../../API/requests.js'
import './Cast.css'
function Cast({ info }) {
    //console.log(info)
    return (
        <div className="cast">
            <img src={`${image_url}w500${info.profile_path}`} onError={(e) => { e.target.onerror = null; e.target.src = profile }} alt={info.character} />
            <h3>{info.name}</h3>
            <p>{info.character}</p>
        </div>
    )
}

export default Cast