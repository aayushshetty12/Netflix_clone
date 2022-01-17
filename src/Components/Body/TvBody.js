import React from 'react'
import { useSelector } from 'react-redux'
import './Body.css'
import Tile from './Tile.js'

function TvSection({item}) {

    const {title,start,end}=item

    let dataShow= useSelector(state=>state.show.tvData)
    dataShow=dataShow.slice(start,end)
    
    return (
        <div className='body'>
            <div className="head">
                <h2 className='title'>{title}</h2>
            </div>
            <div className="scroll">    
                {dataShow.map(item=>
                    <Tile
                        item={item}
                        categ='tv'
                    /> 
                    )
                }
            </div>
        </div>
    )
}

export default TvSection
