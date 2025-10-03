import { useEffect, useState } from "react";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../api/tmdb"
import type { MovieResult } from "../types/type";
import Carousel from "../components/Carousel";
import HeroBanner from "../components/HeroBanner";

interface MovieCategories {
  popular: MovieResult[];
  topRated: MovieResult[];
  upcoming: MovieResult[];
}

function HomePage() {

  // console.log("TEST DE LA VARIABLE D'ENV :", import.meta.env.VITE_TMDB_API_KEY);
  const [moviesLists, setMoviesLists] = useState<MovieCategories>({
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setIsLoading(true);

        const [popular, topRated, upcoming] = await Promise.all([
          getPopularMovies(),
          getTopRatedMovies(),
          getUpcomingMovies(),
        ]);

        setMoviesLists ({
          popular,
          topRated,
          upcoming,
        });
      } catch (error) {
        console.error("Erreur lors du chargement des films:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center", padding: "4rem"}}>
        <p>Chargement des films...</p>
      </section>
    );
  }

  return (
    <section>
      <div>
        <HeroBanner />
        <Carousel title="Films Populaires" movies={moviesLists.popular} />
        <Carousel title="Les mieux Notés" movies={moviesLists.topRated} />
        <Carousel title="Prochainement" movies={moviesLists.upcoming} />
      </div>
    </section>
  );
}

export default HomePage;