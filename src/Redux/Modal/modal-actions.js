import axios from '../../API/axios.js'
import { trailer_url } from '../../API/requests'

export const showModal = (id, categ) => {
    return dispatch => {
        console.log(id)
        axios.get(`${categ}/${id}/${trailer_url}`)
            .then(res => {
                // console.log(res)
                const trailer_id = res.data.results
                dispatch({
                    type: 'SHOW_MODAL',
                    payload: trailer_id
                })
            })
    }
}

export const hideModal = () => {
    return dispatch => {
        dispatch({
            type: 'HIDE_MODAL'
        })
    }
}