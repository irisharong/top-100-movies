import React from "react";

const MovieList = (props) => { 
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className='image-container d-flex justify-content-start m-3 col-2'>
					<img src={movie['im:image'][2].label} alt='movie'></img>
          <div className="image-desc">
            <span>{movie['im:name'].label}</span>
            <div className="price">
              <span>{movie['im:price'].label}</span></div>
          </div>
          <div
            onClick={() => props.handleFavoriteClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'
          >            
            {props.favorite}
					</div>
				</div>
        
      ))}
    </>
  );
};

export default MovieList;