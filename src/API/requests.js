import {API_KEY} from './key.js'

//let TopRated='Top Rated'

export const movie_requests = [
	//`trending/movie/week?api_key=${API_KEY}&language=en-US`,
	`movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	 `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	`discover/movie?api_key=${API_KEY}&with_genres=28`,
	`discover/movie?api_key=${API_KEY}&with_genres=35`,
	// Crime: `discover/movie?api_key=${API_KEY}&with_genres=27`,
	// Drama: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
	`discover/movie?api_key=${API_KEY}&with_genres=99`
];

export const tv_requests=[
		// NetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=123`,
		//Trending: `trending/tv/week?api_key=${API_KEY}&language=en-US`,
		`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
		`tv/top_rated?api_key=${API_KEY}&language=en-US`,
		`discover/tv?api_key=${API_KEY}&with_genres=10759`,
		`discover/tv?api_key=${API_KEY}&with_genres=35`,
		// Crime: `discover/tv?api_key=${API_KEY}&with_genres=80`,
		// Drama: `discover/tv?api_key=${API_KEY}&with_genres=18`,
		`discover/tv?api_key=${API_KEY}&with_genres=99`
]

export const movie_banner=`trending/movie/week?api_key=${API_KEY}&language=en-US`

export const tv_banner=`trending/tv/week?api_key=${API_KEY}&language=en-US`

export const search_request=`/search/multi?api_key=${API_KEY}`

export const get_about= `?api_key=${API_KEY}&language=en-US`

export const get_credit= `credits?api_key=${API_KEY}&language=en-US`

export const image_url='http://image.tmdb.org/t/p/'
	 
