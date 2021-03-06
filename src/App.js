import Header from './Components/Header/Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react'
import Loader from "./Components/Loader/Loader"

const Movies = lazy(() => import("./Pages/Movies"))
const TvShows = lazy(() => import("./Pages/TvShows"))
const MovieDetails = lazy(() => import("./Components/Details/MovieDetails"))
const TvDetails = lazy(() => import("./Components/Details/TvDetails"))
const Search = lazy(() => import("./Components/Search/Search"))

function App() {
  return <div className="App">
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path='/' element={<Movies />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/:title' element={<MovieDetails />} />
          <Route path='/shows' element={<TvShows />} />
          <Route path='/tv/:title' element={<TvDetails />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Suspense>
    </Router>
  </div>
}

export default App;
