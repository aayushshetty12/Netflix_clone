const INITIAL_STATE={
    about:[],
    credit:[]
}

const detailsReducer=(state=INITIAL_STATE,{type,payload})=>{
    switch(type){
        case 'SET_ABOUT':
            return {...state, about: payload}
        
        case 'SET_CREDIT':
            return {...state, credit: payload}

        default:
            return INITIAL_STATE
    }
}

export default detailsReducer