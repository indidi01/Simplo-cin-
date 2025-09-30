import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb"
import type { MovieResult } from "../types/type";
import MovieCard from "../components/MovieCard";

function HomePage() {

  console.log("TEST DE LA VARIABLE D'ENV :", import.meta.env.VITE_TMDB_API_KEY);
  const [movies, setMovies] = useState<MovieResult[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      console.log("Films recus dans HomePage", popularMovies);
      setMovies(popularMovies);
    };

    fetchMovies();
  }, []);

  return (
    <section>
      <h1>Page d'accueil</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;