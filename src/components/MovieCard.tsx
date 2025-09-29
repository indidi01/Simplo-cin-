import { Movie } from "../types/type";
import styles from "./MovieCard.module.css"

interface MovieCardProps {
    movie: Movie;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

function MovieCard({ movie }: MovieCardProps) {
    const imageUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;

    return (
        <div className={Styles.card}>
            <img src={Styles.poster} src={imageUrl} alt={`Affiche de ${movie.title}`} />
            <h3 className={Styles.title}>{movie.title}</h3>
        </div>
    );
}