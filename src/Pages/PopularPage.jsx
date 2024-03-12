import React, { useEffect, useState } from 'react'
import Popular from '../Component/Popular';


export default function PopularPage() {

    const url = ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')

    const [movies, setMovies] = useState({});

async function popularMovies() {
    const response= await fetch(url, {
        headers: {
            Authorization: process.MOVIE_SEARCH_APP_API,
            accept: 'application/json'
        }
    })
    const data= await response.json()
    console.log(data)
    setMovies(data)

}
useEffect(() => {
 popularMovies()
  }
, [])

    const websiteurl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  return (
    <>
    <p>Popular Movies Page</p>
    <div className='outer-div'>
        {movies.results && movies.results.map((movie) => (
            <div className='innerdiv'>
            <img src={`${websiteurl}${movie.poster_path}`} alt="" />
            
            <h2>{movie.title}</h2>
            </div>
        ))}
    </div>
    </>
    
  );
  }
