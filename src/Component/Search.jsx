import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieItem from "./MovieItem";

function Search() {
  const [movies, setMovies] = useState({});

  const [searchKey, setSearchKey] = useState(null);

  async function searchMovies() {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchKey}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4",
          accept: "application/json",
        },
      }
    );
    const data = await response.json();

    setMovies(data);
  }
  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(searchKey);
    await searchMovies();
  };

  return (
    <>
      <form onSubmit={handleSearch} className="mx-auto  w-3/5 my-5">
        <input
          type="text"
          placeholder="Search for movies"
          className="border border-black w-full mb-3 p-3 rounded-full"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        {/* <input
          type="submit"
          value="Search for movies"
          placeholder=""
          className="bg-blue-700 text-white w-full p-3 cursor-pointer"
        /> */}
      </form>

      <div
        className="grid grid-cols-2 bg-primary text-white py-4
      md:grid-cols-3 lg:grid-cols-5 py-4 gap-4"
      >
        {movies.results &&
          (movies.results.length === 0 ? (
            <div>Result not found</div>
          ) : (
            movies.results.map((movie) => <MovieItem movie={movie} />)
          ))}
      </div>
    </>
  );
}

export default Search;
