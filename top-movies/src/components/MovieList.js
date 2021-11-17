import React from "react";

const MovieList = (props) => { 

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className='image-container d-block justify-content-center m-3 col'>
					<img src={movie['im:image'][2].label} alt='movie'></img>
          <div className="image-desc">
            <span>{movie['im:name'].label}</span>
          </div>
				</div>
        
      ))}
    </>
  );
};

export default MovieList;