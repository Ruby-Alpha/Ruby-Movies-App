import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function TopRated() {

const url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
;

const [fetchTopRated, setFetchTopRated] = useState ({})

    async function ratedMovie() {
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4' ,
                accept: "application/json"
              },
        })
        const data = await response.json()
        console.log(data)
        setFetchTopRated(data)
    }

    useEffect(() => {
     ratedMovie()
    }, [])
    
    const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";


  return (

    <>
    
    <div className="mx-auto w-[98%] bg-sky-800">
        <h1 className="w-full bg-sky-50 w-full  text-3xl font-bold underline-">Top Rated</h1>
        <div>
          <Link to={"/toprated"}>view all</Link>
          {""}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fetchTopRated.results &&
            fetchTopRated.results.slice(0, 5).map((rated) => (
              <div>
                <div>
                  <img
                    src={`${websiteURL}${rated.poster_path}`}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="text-2xl font-bold ">{rated.title} </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default TopRated