import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsItems = actors.map(actor => (
    <div key={actor.name}>
      {actor.name}
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))
  return <div>
    <h1>Actors Page</h1>
    {actorsItems}
  </div>;
}

export default Actors;
// This component should render the text Actors Page in an <h1>, 
// and make a new <div> for each actor. 
// The <div> should contain the actor's name,
//  and a <ul> with a list of their movies.

// Note: The tests will count how many <div>s are nested inside your Movies, 
// Directors, and Actors components. So to get tests to pass, 
// you must create exactly one <div> for each movie, director, or actor, 
// and no additional nested <div>s in those components.