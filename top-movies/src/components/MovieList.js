import React from "react";

const MovieList = (props) => { 
  const Favorite = props.favorite;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className='image-container d-flex justify-content-start m-3 col-md-2'>
					<img src={movie['im:image'][2].label} alt='movie'></img>
          <div className="image-desc">
            <span>{movie['im:name'].label}</span>
          </div>
          <div className='overlay d-flex align-items-center justify-content-center'>
            <Favorite />
					</div>
				</div>
        
      ))}
    </>
  );
};

export default MovieList;