import "./App.css";
import Header from './Components/Header';
import Movies from './Pages/Movies'
import Shows from "./Pages/Shows";
import Details from "./Components/Details"
import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return <div className="App">
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Movies/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:title' element={<Details movies/>}/>
        <Route path='/shows' element={<Shows/>}/>
        <Route path='/tv/:title' element={<Details shows/>}/>

      </Routes>
    </Router>
    
  </div>;
}

export default App;
