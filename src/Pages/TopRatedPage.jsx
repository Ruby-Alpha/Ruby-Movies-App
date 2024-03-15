import React, { useEffect, useState } from "react";
import TopRated from "../Component/TopRated";

export default function TopRatedPage() {
  //   const url = "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";

  //   const [topRated, settopRated] = useState({});

  //   async function TopRatedMovies() {
  //     const response = await fetch(url, {
  //       headers: {
  //         Authorization: process.env.MOVIE_SEARCH_APP_API,

  //         accept: "application/json",
  //       },
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     settopRated(data);
  //   }

  //   useEffect(() => {
  //     TopRatedMovies();
  //   }, []);
  //   const websiteurl = "https://media.themoviedb.org/t/p/w300_and_h450_bestv2";
  return (
    <div className="bg-primary text-white min-h-screen">
      <TopRated />
      {/* <div className="flex justify-center items-center  m-auto  ">
        <p className="bg-primary text-white p-8 py-2 mt-4">Top-Rated Movies</p>
      </div>

      <div className="bg-primary mb-2  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-2">
        {topRated.results &&
          topRated.results.map((topRated) => (
            <div className="mb-4 mt-4 hover:opacity-75 transform hover:scale-110 ease-in-out">
              <img src={`${websiteurl}${topRated.poster_path}`} alt="" />

              <h2 className="w-full text-white text-2xl font-bold underline mt-6 mb-4 ">
                {topRated.name}
              </h2>
              <div>
                <h2>{topRated.vote_count}</h2>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
}
