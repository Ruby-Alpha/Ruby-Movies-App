/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [review, setReviews] = useState({});

  const params = useParams();
  console.log("params", params);
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}`;
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${params.id}/reviews`;
  const websiteurl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
  const backdrop = "https://image.tmdb.org/t/p/original";

  async function fetchMovieDetails() {
    try {
      const response = await fetch(movieDetailsUrl, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4",
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4",
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
    <div className="relative h-[600px]">
      <img
        src={`${backdrop}${movie.backdrop_path}`}
        alt=""
        className="h-full w-full bg-black opacity-20"
      />
      <div className="absolute top-0 left-0 right-0 mx-auto w-[90%] py-10">
        <div className="grid grid-cols-10 gap-10">
          <div className="col-span-2">
            <img src={`${websiteurl}${movie.poster_path}`} alt="" />
          </div>
          <div className="col-span-8">
            <h1 className="font-bold text-2xl lg:text-4xl mb-5">
              {movie.title}
            </h1>
            {/* <p>{movie.release_date}</p> */}
            {/* {movie.genres.map((genre) => {
            <div>{genre.name}</div>;
          })} */}
            <div className="lg:w-3/4">
              <h3 className="lg:text-2xl font-semibold mb-3">Overview</h3>
              <p className="font-light">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div>{review.author}</div>
    </div>
  );
}
