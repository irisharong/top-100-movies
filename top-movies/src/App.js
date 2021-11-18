import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);


  const getMovieList = async () => {
    const url = "https://itunes.apple.com/us/rss/topmovies/limit=100/json";

    const response = await fetch(url);
    const responseJson = await response.json();
   
    if(responseJson.feed.entry) {
      setMovies(responseJson.feed.entry);
    }
  }

	const addFavoriteMovie = (movie) => {
		const newFavoriteList = [...favorites, movie];
		setFavorites(newFavoriteList);
	};

  const removeFavoriteMovie = (movie) => {
    const movieId = movie.id.attributes['im:id'];
    
		const newFavouriteList = favorites.filter(
			(favorite) => favorite.id.attributes['im:id'] !== movieId
		);

		setFavorites(newFavouriteList);
	};

  useEffect(() => {
    getMovieList();
  }, []);

	return (
		<div className='movie-app'>

      {favorites.length > 0 && (
        <>
          <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieListHeading heading='Favorites' />
          </div>
          <div className='row'>
            <MovieList
              movies={favorites}
              handleFavoriteClick={removeFavoriteMovie}
              favorite="Remove to Favorites"
            />
          </div>
        </>
      )}
      
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Top 100 Movies' />
			</div>
			<div className='row d-flex justify-content-between'>
        <MovieList
          movies={movies}
          handleFavoriteClick={addFavoriteMovie}
          favorite="Add to Favorites"
        />
			</div>

		</div>
	);
};

export default App;