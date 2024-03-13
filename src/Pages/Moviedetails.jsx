import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);

    const params = useParams();
    console.log('params', params);
    const url = `https://themoviedb.org/movie/${params.id}`;

    useEffect(()=> {
        async function fetchMovieDetails() {
            try {
                const movieDetails = await fetch(url);
                // movieDetails.json
            } catch (error) {
                console.log(error);
            }
        }
    },[]);

    return (
    <>
      <Navbar />
      <div className="movie-details-div flex">
        <div className="movie-poster-div">
            <img src="./src/assets/images/batman.jpg" alt="batman" />
        </div>
        <div className="movie-info-div">
            <h1>Movie Title</h1>
            <p>Release Date</p>
            <p>Genre</p>
            <p>User Rating</p>
            <p>Movie Description</p>
        </div>
      </div>
    </>
  );
}
