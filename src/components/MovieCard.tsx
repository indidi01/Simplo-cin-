import type { MovieResult } from "../types/type";
import styles from "./MovieCard.module.css"

interface MovieCardProps {
    movie: MovieResult;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

function MovieCard({ movie }: MovieCardProps) {
    const imageUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

    return (
        <div className={styles.card}>
            <img className={styles.poster} src={imageUrl} alt={`Affiche de ${movie.title}`} />
            <h3 className={styles.title}>{movie.title}</h3>
        </div>
    );
}

export default MovieCard;