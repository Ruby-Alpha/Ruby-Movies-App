import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MovieItem from "./MovieItem";

function TopRated() {
  const location = useLocation();

  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const [fetchTopRated, setFetchTopRated] = useState({});

  async function ratedMovie() {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4",
        accept: "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    setFetchTopRated(data);
  }

  useEffect(() => {
    ratedMovie();
  }, []);

  const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";

  return (
    <>
      <div className="mx-auto w-[98%] py-10">
        <div className="text-white flex justify-between text-xl mb-5">
          <h1 className="bg-primary text-white text-2xl font-bold">
            Top Rated
          </h1>
          {location.pathname === "/" && <Link to={"/toprated"}>View all</Link>}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {location.pathname === "/" &&
            fetchTopRated.results &&
            fetchTopRated.results
              .slice(0, 5)
              .map((movie) => <MovieItem movie={movie} />)}

          {location.pathname === "/top-rated" &&
            fetchTopRated.results &&
            fetchTopRated.results.map((movie) => <MovieItem movie={movie} />)}
        </div>
      </div>
    </>
  );
}

export default TopRated;
