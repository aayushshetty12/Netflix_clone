const INITIAL_STATE={
    tvBanner:[],
    tvData:[],
    tvFetch:true
}
    
const tvReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'SET_SHOW_BANNER':{
            return {...state, tvBanner:action.payload}
        }
        case 'SET_SHOWS':{
            //console.log(action.payload)
            return {...state, tvData:action.payload}
        }
        case 'NULLIFY':{
            return { ...state,tvFetch:false}
    }
        default:{
            return INITIAL_STATE
        }
    }
}

export default tvReducer