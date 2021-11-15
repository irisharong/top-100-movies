import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
	const [movies, setMovies] = useState([]);

  const getMovieList = async () => {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson.feed.entry)
    if(responseJson.feed.entry) {
      setMovies(responseJson.feed.entry);
    }
  }

  useEffect(() => {
    getMovieList();
  }, []);
	console.log(movies)
	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
        <MovieList movies={movies} />
			</div>
		</div>
	);
};

export default App;