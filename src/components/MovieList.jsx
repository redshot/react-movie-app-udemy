import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const MovieList = () => {
  const { movieList } = useContext(GlobalContext);
  console.log(movieList);

  return (
    <div>
      {movieList && movieList.length > 0
        ? movieList.map((item) => (
            <div key={item.imdbID}>
              <img src={item.Poster} alt="Movie Poster" />
              <p>{item.Title}</p>
              <p>{item.Year}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default MovieList;

/**
 * - This component renders a list of movies
 * - The movieList variable is passed to the component as a prop, and it is used to populate the list of movies
 * - The useContext hook is used to access the GlobalContext object, which contains the movieList prop
 * - The map function is used to iterate over the movieList prop and render a div element for each movie
 * -  If the movieList prop is empty or null, then the null value is returned and no movies are rendered
 *
 */
