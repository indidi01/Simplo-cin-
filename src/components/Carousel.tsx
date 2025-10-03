import { useRef, useState, useEffect } from "react";
import type { MovieResult } from "../types/type";
import MovieCard from "./MovieCard";
import styles from "./Carousel.module.css";

interface CarouselProps {
  title: string;
  movies: MovieResult[];
}

const Carousel = ({ title, movies }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Défilement avec les boutons
  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    // Scroll classique (style Netflix)
    const scrollAmount = carouselRef.current.clientWidth;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
    });
  };

  // Gestion de l'affichage des flèches
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setShowLeftArrow(scrollLeft > 5);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
  };

  // Défilement sourie
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      carousel.scrollLeft += e.deltaY * 5;
      updateArrows();
    };
    carousel.addEventListener("wheel", handleWheel, { passive: false });
    updateArrows();
    return () => {
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, [movies]);

  return (
    <section className={styles.carouselWrapper}>
      <h2 className={styles.carouselTitle}>{title}</h2>

      <div className={styles.carouselContainer}>
        {showLeftArrow && (
          <button
            className={`${styles.scrollButton} ${styles.left}`}
            onClick={() => scroll("left")}
            aria-label="Défiler vers la gauche"
          >
            &lt;
          </button>
        )}

        <div
          className={styles.carouselContent}
          ref={carouselRef}
          onScroll={updateArrows}
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {showRightArrow && (
          <button
            className={`${styles.scrollButton} ${styles.right}`}
            onClick={() => scroll("right")}
            aria-label="Défiler vers la droite"
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
