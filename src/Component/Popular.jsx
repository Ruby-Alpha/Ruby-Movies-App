import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieItem from "./MovieItem";

function Popular() {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const [fetchPopular, setFetchPopular] = useState({});

  // This is use to get the current page of the website
  const location = useLocation();

  async function popularMovie() {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4",
        accept: "application/json",
      },
    });
    const data = await response.json();

    setFetchPopular(data);
  }

  useEffect(() => {
    popularMovie();
  }, []);

  return (
    <>
      <div className="mx-auto w-[98%] py-10">
        <div className="text-white flex justify-between text-xl mb-5">
          <h1 className="bg-primary text-white text-2xl font-bold">POPULAR</h1>
          {location.pathname === "/" && <Link to={"/popular"}>View all</Link>}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Show only 5 movies in the home page */}
          {location.pathname === "/" &&
            fetchPopular.results &&
            fetchPopular.results
              .slice(0, 5)
              .map((movie) => <MovieItem movie={movie} />)}

          {/* Show all movies in the popular page  */}
          {location.pathname === "/popular" &&
            fetchPopular.results &&
            fetchPopular.results.map((movie) => <MovieItem movie={movie} />)}
        </div>
      </div>
    </>
  );
}

export default Popular;
