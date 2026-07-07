import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import axios from "axios";
import { toast } from "react-toastify";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };
 const addToWatchlist = async () => {
  try {
    await axios.post("http://localhost:5000/api/watchlist", {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      Year: movie.Year,
    });

   toast.success("Movie added to Watchlist!");
  } catch (error) {
  if (error.response?.status === 400) {
    toast.warning("Movie is already in your watchlist!");
  } else {
    toast.error("Failed to add movie.");
  }
}
};

  if (!movie) {
    return (
      <div
        style={{
          color: "white",
          background: "#111",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        gap: "40px",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: "300px",
          borderRadius: "12px",
        }}
      />

      <div>
        <h1>{movie.Title}</h1>

        <p>⭐ IMDb Rating: {movie.imdbRating}</p>

        <p>📅 Year: {movie.Year}</p>

        <p>🎭 Genre: {movie.Genre}</p>

        <p>🎬 Director: {movie.Director}</p>

        <p>👥 Actors: {movie.Actors}</p>

        <p>⏱ Runtime: {movie.Runtime}</p>

        <p style={{ marginTop: "20px" }}>
          📝 {movie.Plot}
        </p>
        <button
  onClick={addToWatchlist}
  style={{
    padding: "12px 20px",
    background: "#E50914",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "16px",
  }}
>
  ❤️ Add to Watchlist
</button>
      </div>
    </div>
  );
}

export default MovieDetails;