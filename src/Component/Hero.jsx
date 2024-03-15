import { useEffect, useState } from "react";

export default function Hero() {
  const [randomMovie, setRandomMovie] = useState({});

  const imageURLOriginal = "https://image.tmdb.org/t/p/original";

  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  function getRandomMovie(movies) {
    const randomMovie = Math.floor(Math.random() * movies.length);

    return movies[randomMovie];
  }

  async function popularMovieAndGetRandomMovie() {
    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4",
        accept: "application/json",
      },
    });
    const movies = await response.json();

    if (movies && movies.results) {
      const theRandomMovie = getRandomMovie(movies.results);

      setRandomMovie(theRandomMovie);
    }
  }

  useEffect(() => {
    popularMovieAndGetRandomMovie();
  }, []);

  return (
    <div className="relative lg:h-[700px] bg-primary text-white">
      <img
        src={`${imageURLOriginal}${randomMovie.poster_path}`}
        alt=""
        className="h-full w-full bg-black opacity-20 object-cover"
      />
      <div className="absolute top-0 left-0 right-0 mx-auto w-[90%]">
        <div className="flex items-center lg:justify-center h-[500px] lg:h-[700px]">
          <div className="">
            <h1 className="font-bold text-4xl lg:text-7xl mb-10 lg:text-center">
              Welcome.
            </h1>
            <p className="lg:text-center text-2xl">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
