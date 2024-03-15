import React from "react";
import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  return (
    <div className="hover:opacity-75 transform hover:scale-110 ease-in-out">
      <div>
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`${websiteURL}${movie.poster_path}`}
            alt=""
            className="w-full"
          />
        </Link>
      </div>
      <div className="text-lg py-4 text-center">{movie.title} </div>
    </div>
  );
}
