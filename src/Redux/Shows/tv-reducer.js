const INITIAL_STATE = {
    tvBanner: '',
    tvData: [],
    tvFetch: true,
    showModal: false,
    video_id: ''
}

const tvReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SHOW_BANNER': {
            return { ...state, tvBanner: action.payload }
        }
        case 'SET_SHOWS': {
            //console.log(action.payload)
            return { ...state, tvData: action.payload }
        }
        case 'SHOW_MODAL': {
            return { ...state, showModal: true, video_id: action.payload }
        }
        case 'HIDE_MODAL': {
            return { ...state, showModal: false, video_id: '' }
        }
        default: {
            return INITIAL_STATE
        }
    }
}

export default tvReducer