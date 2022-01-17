const INITIAL_STATE = {
    about: [],
    credit: [],
    showModal: false,
    video_id: ''
}

const detailsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SET_ABOUT':
            return { ...state, about: payload }
        case 'SET_CREDIT':
            return { ...state, credit: payload }
        case 'SHOW_MODAL':
            return { ...state, showModal: true, video_id: payload }
        case 'HIDE_MODAL':
            return { ...state, showModal: false, video_id: '' }
        default:
            return INITIAL_STATE
    }
}

export default detailsReducer