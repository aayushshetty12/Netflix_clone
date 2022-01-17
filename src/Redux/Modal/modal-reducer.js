const INITIAL_STATE={
    show:false,
    video_id:''
}

const modalReducer=(state=INITIAL_STATE, {type, payload})=>{
    switch(type){
        case 'SHOW_MODAL':
            return {show:true, video_id:payload}
        case 'HIDE_MODAL':
            return INITIAL_STATE
        default:
            return INITIAL_STATE
    }
}

export default modalReducer