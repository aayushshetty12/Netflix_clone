import { tv_requests, tv_banner } from '../../API/requests.js'
import axios from '../../API/axios.js'

export const fetchTvData = () => {
	return async dispatch => {
		Promise.all(tv_requests.map(request => {
			return axios.get(request)
				.then(res => res.data.results)
		})).then(items => {
			let final = [].concat.apply([], items)
			//console.log(final)
			dispatch({
				type: 'SET_SHOWS',
				payload: final
			})
		})
	}
}

export const fetchTvBanner = () => {
	return async dispatch => {
		axios.get(tv_banner)
			.then(banner => {
				let index = Math.floor(Math.random() * banner.data.results.length)
				//console.log(banner.data.results[index])
				dispatch({
					type: 'SET_SHOW_BANNER',
					payload: banner.data.results[index]
				})
			})
	}
}
