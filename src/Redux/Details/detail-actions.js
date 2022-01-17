import { get_about, get_credit } from '../../API/requests.js'
import axios from '../../API/axios.js'

export const fetchDetails = (title, categ) => {
    console.log(title)
    return async dispatch => {
        await axios.get(`${categ}/${title}${get_about}`)
            .then(about => {
                console.log(about.data)
                dispatch({
                    type: 'SET_ABOUT',
                    payload: about.data
                })
            })

        await axios.get(`${categ}/${title}/${get_credit}`)
            .then(credit => {
                console.log(credit.data.cast)
                dispatch({
                    type: 'SET_CREDIT',
                    payload: credit.data.cast
                })
            })
    }
}