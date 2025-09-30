import type { MovieResult } from "../types/type";
import MovieCard from "./MovieCard";
import style from "./Carousel.module.css";

interface CarouselProps {
  title: string;
  movies: MovieResult[];
}

const Carousel = ({ title, movies }: CarouselProps) => {
  return (
    <section className={style.carouselSection}>
      <h2 className={style.carouselTitle}>{title}</h2>
      <div className={style.carouselContent}>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;