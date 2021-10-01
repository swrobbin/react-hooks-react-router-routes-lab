import React from "react";
import { movies } from "../data";

function Movies() {
// console.log(movies)
let genres = ""

const movieDivs = movies.map(movie => {

  return <div key={movie.title}>
    <p>{movie.title}</p>
    <p>Length:{movie.time}</p>
    <ul>
    {movie.genres.map((genre) => (
    <li key={genre}>{genre}</li>
  ))}
    </ul>
    
  </div>
})


  return <div>
    <h1>Movies Page</h1>
    {movieDivs}


  </div>;
}


// This component should render the text Movies Page in an <h1>, 
// and make a new <div> for each movie. 
// The <div> should contain the movie's title, 
// time and a <ul> with a list of its genres, each within their own <li>.


export default Movies;
