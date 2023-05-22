import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import { APL_KEY } from "./const/const";
function App() {
  return (<div>
    <Navbar></Navbar>
    <Banner></Banner>
    <Rowpost ser title="NetflixOriginals" url={`/discover/tv?api_key=${APL_KEY}&with_networks=213`} ></Rowpost>
    <Rowpost vid title="ActionMovies" url={`/discover/movie?api_key=${APL_KEY}&with_genres=28` }></Rowpost>
    <Rowpost vid title="ComedyMovies" url={`/discover/movie?api_key=${APL_KEY}&with_genres=35`}></Rowpost>
    <Rowpost vid title="HorrorMovies" url={`/discover/movie?api_key=${APL_KEY}&with_genres=27`}></Rowpost>
    <Rowpost vid title="RomanceMovies" url={`/discover/movie?api_key=${APL_KEY}&with_genres=10749`}></Rowpost>
    <Rowpost vid title="Documentaries" url={`/discover/movie?api_key=${APL_KEY}&with_genres=99`}></Rowpost>

    </div>
   
  );
}

export default App;
