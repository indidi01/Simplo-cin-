function HomePage() {
    return <h1>Page d'accueil</h1>;
}

export default HomePage;

// import { useEffect, useState } from "react";

// const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

// useEffect(() => {
//     const fetchMovies = async () => {
//         const movies = await getPopularMovies();
//         setPopularMovies(movies);
//     };
//     fetchMovies();
// }, []);