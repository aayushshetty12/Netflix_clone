import { movie_requests, movie_banner } from '../../API/requests.js'
import axios from '../../API/axios.js'

export const fetchMovieBanner = () => {
	return async dispatch => {
		axios.get(movie_banner)
			.then(banner => {
				let index = Math.floor(Math.random() * banner.data.results.length)
				//console.log(banner.data.results[index])
				dispatch({
					type: 'SET_MOVIE_BANNER',
					payload: banner.data.results[index]
				})
			})
	}
}

export const fetchMovieData = () => {
	return async dispatch => {
		Promise.all(movie_requests.map(request => {
			return axios.get(request)
				.then(res => res.data.results)
		})).then(items => {
			let final = [].concat.apply([], items)
			//console.log(final)
			dispatch({
				type: 'SET_MOVIES',
				payload: final
			})
		})
	}
}


