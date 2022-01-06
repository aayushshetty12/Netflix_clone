
const INITIAL_STATE={
    data:[],
    query:''
}

const searchReducer=(state=INITIAL_STATE,{type,payload})=>{
    switch(type){
        case 'SEARCH_DATA':{
            
            //console.log(payload)
            return {...state,data:payload}
        }
        case 'QUERY':{
            return {...state, query: payload}
        }
       default: return state
    }
}

export default searchReducer