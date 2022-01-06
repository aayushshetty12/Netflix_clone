 import {movie_requests,movie_banner} from '../../API/requests.js'
 import axios from '../../API/axios.js'

export const fetchMovies=request=>{
    

		//console.log(movie_requests)
		//fetchData()
        // const getMovies=await axios.get(movie_requests[request])
        // console.log(getMovies.data.results)
		// 		dispatch({
		// 			type: request,
		// 			payload: getMovies.data.results
		// 		})
				
			// case 'Top Rated':
			// 	dispatch({
			// 		type:'SET_MOVIE_DATA_TOP_RATED',
			// 		payload: getMovies.data.results
			// 	})
			// 	break
			// case 'Action':
			// 	dispatch({
			// 		type:'SET_MOVIE_DATA_ACTION',
			// 		payload: getMovies.data.results
			// 	})
			// 	break
			// case 'Comedy':
			// 	dispatch({
			// 		type:'SET_MOVIE_DATA_COMEDY',
			// 		payload: getMovies.data.results
			// 	})
			// 	break
			// case 'Documentaries':
			// 	dispatch({
			// 		type:'SET_MOVIE_DATA_DOCUMENTARIES',
			// 		payload: getMovies.data.results
			// 	})
			// 	break	
			
		
        
    }


export const fetchData=()=>{
	return async dispatch=>{
	 Promise.all(movie_requests.map(request=>{
		return axios.get(request)
		.then(res=>res.data.results)
	})).then(items=> {
		let final=[].concat.apply([],items)
		//console.log(final)
		dispatch({
	 			type: 'SET_MOVIES',
				payload: final
					})
	})
}
}

export const fetchBanner=()=>{
	return async dispatch=>{
		 axios.get(movie_banner)
		.then(banner=>{
			let index=Math.floor(Math.random()*banner.data.results.length)
			//console.log(banner.data.results[index])
		dispatch({
			type:'SET_MOVIE_BANNER',
			payload:banner.data.results[index]
		})
		dispatch({
			type:'NULLIFY'
		})
		})
		

		
	}
}
