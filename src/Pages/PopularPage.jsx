import React, { useEffect, useState } from 'react'


export default function PopularPage() {

    const url = ('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')

    const [movies, setMovies] = useState({});

async function popularMovies() {
    const response= await fetch(url, {


        headers: {
            Authorization: process.env.MOVIE_SEARCH_APP_API,
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
    <div className='flex justify-center items-center  m-auto  ' >
    <p className='bg-primary text-white p-8 py-2 mt-4' > Popular Movies</p>
    </div>
    
    <div className= "bg-primary mb-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2 ">
        {movies.results && movies.results.map((movie) => (
            <div className='mb-4 mt-4 hover:opacity-75 transform hover:scale-110 ease-in-out'>
            <img src={`${websiteurl}${movie.poster_path}`} class="w-46 h-auto" alt="" />
            
            <h2 className="w-full text-white text-2xl font-bold underline mt-6 mb-4 ">{movie.title}</h2>
            
            </div>
        ))}
    </div>
    </>
    
  );
  }
