
const INITIAL_STATE = {
    movieBanner: null,
    movieData: [],
    movieFetch: true,
    showModal: false,
    video_id: ''
}

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_MOVIE_BANNER': {
            return { ...state, movieBanner: action.payload }
        }
        case 'SET_MOVIES': {
            return { ...state, movieData: action.payload }
        }
        case 'SET_MOVIE_CREDITS': {
            return action.payload
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

export default movieReducer