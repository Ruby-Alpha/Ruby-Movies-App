/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState({});

  const params = useParams();
  console.log("params", params);
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${params.id}`;
  const reviewsUrl = `https://api.themoviedb.org/3/movie/${params.id}/reviews`;
  const websiteurl = "https://image.tmdb.org/t/p/w300_and_h450_bestv2";
  const imageURLOriginal = "https://image.tmdb.org/t/p/original";
  const imageURLWidth500 = "https://image.tmdb.org/t/p/w500";

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
    <div className="">
      <div className="relative lg:h-[600px] bg-primary text-white">
        <img
          src={`${imageURLOriginal}${movie.backdrop_path}`}
          alt=""
          className="h-full w-full bg-black opacity-20"
        />
        <div className="lg:hidden grid grid-cols-12 absolute top-5 left-0 right-0 mx-auto w-[90%]">
          <div className="col-span-3">
            <img src={`${websiteurl}${movie.poster_path}`} alt="" />
          </div>
          <div className="col-span-9 hidden"></div>
        </div>

        <div className="lg:absolute lg:top-0 lg:left-0 lg:right-0 mx-auto w-[90%] py-10">
          <div className="grid grid-cols-10 gap-10">
            <div className="hidden lg:block col-span-2">
              <img src={`${websiteurl}${movie.poster_path}`} alt="" />
            </div>
            <div className="col-span-8">
              <h1 className="font-extrabold text-2xl lg:text-4xl mb-5 text-center lg:text-left">
                {movie.title}
              </h1>

              {movie.genres && (
                <div className="lg:w-3/4 mb-5">
                  <h3 className="text-xl font-semibold mb-2">Genres</h3>
                  {movie.genres.map((genre) => (
                    <div className="font-light" key={genre.id}>
                      {genre.name}
                    </div>
                  ))}
                </div>
              )}
              <div className="lg:w-3/4 mb-5">
                <h3 className="text-xl font-semibold mb-2">Release Date</h3>
                <p className="font-light">{movie.release_date}</p>
              </div>
              <div className="lg:w-3/4 mb-5">
                <h3 className="text-xl font-semibold mb-2">Overview</h3>
                <p className="font-light">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10">
        <div className="mx-auto w-[90%]">
          {reviews.results && (
            <>
              <h2 className="font-bold text-2xl mb-3">
                Reviews ({reviews.results.length})
              </h2>
              {reviews.results.map((review) => (
                <div className="bg-white shadow-lg rounded-lg p-5 mb-3">
                  <div className="flex mb-5 items-center">
                    {review.author_details.avatar_path && (
                      <div className="ml-2">
                        <img
                          src={`${imageURLWidth500}${review.author_details.avatar_path}`}
                          alt=""
                          className="w-[3rem] rounded-full h-[3rem]"
                        />
                      </div>
                    )}
                    <div className="ml-2">
                      <h3 className="font-bold mb-2">{review.author}</h3>
                      {review.author_details.rating && (
                        <div className="text-white">
                          <span className="bg-primary rounded px-3 py-1 items-center">
                            <span className="pr-2">
                              <FaRegStar className="inline" />
                            </span>
                            <span>{review.author_details.rating}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <p>{review.content}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
