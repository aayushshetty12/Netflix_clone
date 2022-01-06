import {search_request} from '../../API/requests.js'
import axios from '../../API/axios.js'

export const searchData=(query)=>{
    return async dispatch=>{
        //console.log(query)
        await axios.get(`${search_request}&page=1&query=${query}`)
        .then(res=>{
            //console.log(res)
            dispatch({
                type:'QUERY',
                payload:query
            })
            dispatch({
                type:'SEARCH_DATA',
                payload:res.data.results
            })
        
        })
        
    }
}