
const INITIAL_STATE={
    movieBanner:[],
    movieData:[],
    movieFetch:true
}
    
const movieReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'SET_MOVIE_BANNER':{
            
            return {...state,movieBanner:action.payload}
        }
        case 'SET_MOVIES':{
            return { ...state, movieData:action.payload}
        }
        // case 'SET_MOVIE_DATA_TOP_RATED':{
        //     return {...state,'Top Rated':action.payload}
        // }
        // case 'SET_MOVIE_DATA_ACTION':{
        //     return {...state,'Action':action.payload}
        // }
        // case 'SET_MOVIE_DATA_COMEDY':{
        //     return {...state,'Comedy':action.payload}
        // }
        // case 'SET_MOVIE_DATA_DOCUMENTARIES':{
        //     return {...state,'Documentaries':action.payload}
        // }
        case 'SET_MOVIE_CREDITS':{
            return action.payload
        }
        case 'NULLIFY':{
            return { ...state,movieFetch:false}
    }
        default:{
            return INITIAL_STATE
        }
    }
}

export default movieReducer