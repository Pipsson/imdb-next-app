import React from "react";
import Results from "../app/components/Results"; // Adjust the path as necessary
const API_KEY = process.env.API_KEY;
interface SearchParams {
  genre?: string;
}

async function Homepage({ searchParams }: { searchParams: SearchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? `movie/top_rated ` : `trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}

export default Homepage;
