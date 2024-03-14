import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Popular() {

const url =  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const [fetchPopular, setFetchPopular] = useState ({})

    async function popularMovie() {
        const response = await fetch(url, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjBmZTVmODFhNjRhNjg3YzQ5ZWQ0MDlkNjc2Mjg0OCIsInN1YiI6IjY1ZWVlNzRhMmIxMTNkMDE3ZGY5NjU0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T9GmVfISLcA2ZAkPPPHXS8eXzFzeAeEYSkGZ7C2zzX4' ,
                accept: "application/json"
              },
        })
        const data = await response.json()
        console.log(data)
        setFetchPopular(data)
    }

    useEffect(() => {
     popularMovie()
    }, [])
    
    const websiteURL = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";


  return (

    <>
    ''
    <div className="mx-auto w-[98%] bg-sky-800
    ">
        <h1 className="bg-sky-800 w-full text-white text-3xl font-bold underline ">POPULAR</h1>
        <div className='text-white flex justify-end text-2xl'>
          <Link to={"/popular"}>View all</Link>
          {""}
        </div>
        <div className= "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {fetchPopular.results &&
            fetchPopular.results.slice(0, 5).map((popular) => (
              <div>
                <div>
                  <img
                    src={`${websiteURL}${popular.poster_path}`}
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="text-2xl font-bold ">{popular.title} </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Popular