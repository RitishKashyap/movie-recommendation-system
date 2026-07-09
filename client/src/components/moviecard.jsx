import { Link } from "react-router-dom";
import "./moviecard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-card-poster"
      />

      <div className="movie-card-content">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>

        <Link
          to={`/movie/${movie.imdbID}`}
          style={{ textDecoration: "none" }}
        >
          <button className="details-btn">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;