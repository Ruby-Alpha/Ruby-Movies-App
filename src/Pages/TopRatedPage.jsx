import React, { useEffect, useState } from 'react'

export default function TopRatedPage() {
    const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1'

    const [topRated, settopRated] = useState({});

    async function TopRatedMovies(){
        const response = await fetch (url, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4',
                accept: 'application/json'
    }})
    const data= await response.json()
    console.log(data)
    settopRated(data)
    }

    useEffect(() => {
        TopRatedMovies()
         }
       , [])
       
       const websiteurl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
  return (
    <>
    <p>Top-Rated Movies</p>
    <div className='outer-div'>
        {topRated.results && topRated.results.map((topRated) => (
            <div className='innerdiv'>
            <img src={`${websiteurl}${topRated.poster_path}`} alt="" />
            
            <h2>{topRated.title}</h2>
            </div>
        ))}
    </div>
    </>
  );   
}
