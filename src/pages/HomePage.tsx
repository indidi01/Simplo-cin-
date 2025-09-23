import { useEffect, useState } from "react";

const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

useEffect(() => {
    const fetchMovies = async () => {
        const movies = await getPopularMovies();
        setPopularMovies(movies);
    };
    fetchMovies();
}, []);