import React from 'react'
import './Modal.css'
import * as actionCreators from '../../Redux/Modal/modal-actions'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'

function Modal() {

    const dispatch = useDispatch()
    const { hideModal } = bindActionCreators(actionCreators, dispatch)
    //console.log(actionCreators)

    const video_id = useSelector(state => state.modal.video_id)
    //console.log(video_id)

    return (
        <div className='modal'>
            <div className="modal_outer">
                <button onClick={() => hideModal()}>Close</button>
                <div className="modal_inner">
                    {video_id.length !== 0
                        ?
                        (<iframe src={`https://www.youtube.com/embed/${video_id[0].key}?autoplay=1&mute=1`}
                            frameborder='1'
                            allow='autoplay,encrypted-media'
                            allowfullscreen
                            title='video'
                        />)
                        :
                        (<h1>Video Unavailable!</h1>)
                    }
                </div>
            </div>


        </div>
    )
}

export default Modal
