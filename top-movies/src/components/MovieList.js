import React from "react";

const MovieList = (props) => { 

  return (
    <>
      {props.movies.map((movie, index) => (
        <div key={index} className='image-container d-flex justify-content-start m-3 col-2'>
					<img src={movie['im:image'][2].label} alt='movie'></img>
				</div>
      ))}
    </>
  );
};

export default MovieList;