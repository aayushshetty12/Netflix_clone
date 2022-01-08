import { combineReducers } from 'redux'
import movieReducer from './Movies/movie-reducer'
import tvReducer from './Shows/tv-reducer'
import searchReducer from './Search/search-reducer'
import detailsReducer from './Details/detail-reducer'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["search"]
  };

const reducer= combineReducers({
    movie: movieReducer,
    show: tvReducer,
    search: searchReducer,
    details:detailsReducer
})

export default persistReducer(persistConfig,reducer)