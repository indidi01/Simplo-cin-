import type { MovieResult } from "../types/type";
import MovieCard from "./MovieCard";
import style from "./Carousel.module.css";
import { useState } from "react";

interface CarouselProps {
  title: string;
  movies: MovieResult[];
}
const MOVIES_PER_PAGE = 5;

const Carousel = ({ title, movies }: CarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * MOVIES_PER_PAGE;
  const endIndex = startIndex + MOVIES_PER_PAGE;
  const visibleMovies = movies.slice(startIndex, endIndex);

  return (
    <section className={style.carouselWrapper}>
      <h2 className={style.carouselTitle}>{title}</h2>
      <div>
        <button
          className={`${style.scrollButton} ${style.left}`}
          onClick={goToPrevPage}
        >
          &lt;
        </button>

        <div className={style.carouselContainer}>
          <div className={style.carouselContent}>
            {visibleMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>

        <button
          className={`${style.scrollButton} ${style.right}`}
          onClick={goToNextPage}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
