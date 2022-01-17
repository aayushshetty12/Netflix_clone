import React from 'react'
import { useSelector } from 'react-redux'
import './Search.css'
import SearchTile from './SearchTile.js'
import Modal from '../Modal/Modal.js'
function Search() {

    const { data, query } = useSelector(state => state.search)

    const showModal = useSelector(state => state.modal.show)

    //console.log(data)
    return (
        <>
            <div className='search_container'>
                <div className='search'>
                    <p className='heading'>Showing Results for '{query}'</p>
                    <div className="results">
                        {data.map(item => item.poster_path &&

                            <SearchTile item={item} />

                        )}
                    </div>
                </div>

            </div>
            {showModal && <Modal />}

        </>
    )
}

export default Search
