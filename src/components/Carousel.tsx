import type { MovieResult } from "../types/type";
import MovieCard from "./MovieCard";
import style from "./Carousel.module.css";
import { useRef, useState } from "react";

interface CarouselProps {
  title: string;
  movies: MovieResult[];
}

const Carousel = ({ title, movies }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    const newScrollLeft =
      direction === "left"
        ? carouselRef.current.scrollLeft - scrollAmount
        : carouselRef.current.scrollLeft + scrollAmount;

    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  if (movies.length === 0) {
    return null;
  }

  return (
    <section className={style.carouselWrapper}>
      <h2 className={style.carouselTitle}>{title}</h2>

      <div className={style.carouselContainer}>
        {showLeftArrow && (
          <button
            className={`${style.scrollButton} ${style.left}`}
            onClick={() => scroll("left")}
          >
            &lt;
          </button>
        )}

        <div
          className={style.carouselContent}
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {showRightArrow && (
          <button
            className={`${style.scrollButton} ${style.right}`}
            onClick={() => scroll("right")}
          >
            &gt;
          </button>
        )}
      </div>
    </section>
  );
};

export default Carousel;

// code précurseur
// const MOVIES_PER_PAGE = 5;

// const Carousel = ({ title, movies }: CarouselProps) => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
//   };

//   const startIndex = currentPage * MOVIES_PER_PAGE;
//   const endIndex = startIndex + MOVIES_PER_PAGE;
//   const visibleMovies = movies.slice(startIndex, endIndex);

//   return (
//     <section className={style.carouselWrapper}>
//       <h2 className={style.carouselTitle}>{title}</h2>
//       <div>
//         <button
//           className={`${style.scrollButton} ${style.left}`}
//           onClick={goToPrevPage}
//         >
//           &lt;
//         </button>

//         <div className={style.carouselContainer}>
//           <div className={style.carouselContent}>
//             {visibleMovies.map((movie) => (
//               <MovieCard key={movie.id} movie={movie} />
//             ))}
//           </div>
//         </div>

//         <button
//           className={`${style.scrollButton} ${style.right}`}
//           onClick={goToNextPage}
//         >
//           &gt;
//         </button>
//       </div>
//     </section>
//   );
// };
