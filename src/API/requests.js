import {API_KEY} from './key.js'
let TopRated='Top Rated'
export const movie_requests = {
	Trending: `trending/movie/week?api_key=${API_KEY}&language=en-US`,
	Popular:`movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	[TopRated]: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	Action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
	Comedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
	// Crime: `discover/movie?api_key=${API_KEY}&with_genres=27`,
	// Drama: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
	Documentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`
};
export const tv_requests={
	// NetflixOriginals: `discover/tv?api_key=${API_KEY}&with_network=123`,
	Trending: `trending/tv/week?api_key=${API_KEY}&language=en-US`,
	Popular:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
	[TopRated]: `tv/top_rated?api_key=${API_KEY}&language=en-US`,
	Action: `discover/tv?api_key=${API_KEY}&with_genres=10759`,
	Comedy: `discover/tv?api_key=${API_KEY}&with_genres=35`,
	// Crime: `discover/tv?api_key=${API_KEY}&with_genres=80`,
	// Drama: `discover/tv?api_key=${API_KEY}&with_genres=18`,
	Documentaries: `discover/tv?api_key=${API_KEY}&with_genres=99`
} 
//https://api.themoviedb.org/3/movie/580489/credits?api_key=0432d863ea57369b328be50ca55c960c&language=en-US //venom
// top rated, popular