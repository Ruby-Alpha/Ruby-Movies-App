/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [review, setReviews] = useState({});

  const params = useParams();
  console.log("params", params);
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}`;
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${params.id}/reviews`;
  const websiteurl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";

  async function fetchMovieDetails() {
    try {
      const response = await fetch(movieDetailsUrl, {
        headers: {
          Authorization: process.env.MOVIE_SEARCH_APP_API,
          accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchReviews() {
    try {
      const response = await fetch(reviewsUrl, {
        headers: {
          Authorization: process.env.MOVIE_SEARCH_APP_API,
          accept: "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMovieDetails();
    fetchReviews();
  }, [params.id]);

  return (
    <>
      <Navbar />
      <div className="movie-details-div flex">
        <div className="movie-poster-div">
          <img src={`${websiteurl}${movie.poster_path}`} alt="" />
        </div>
        <div className="movie-info-div">
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
          {movie.genres.map((genre) => {
            <div>{genre.name}</div>;
          })}
          <p>{movie.overview}</p>
        </div>
      </div>

      <div>{review.author}</div>
    </>
  );
}
