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

  const watchTrailer = () => {
    const query = encodeURIComponent(`${movie.Title} official trailer`);
    window.open(
      `https://www.youtube.com/results?search_query=${query}`,
      "_blank"
    );
  };

  if (!movie) {
    return (
      <div
        style={{
          background: "#111",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Loading movie...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "50px",
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        alignItems: "flex-start",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: "320px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        }}
      />

      <div style={{ flex: 1, minWidth: "300px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          {movie.Title}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "25px",
          }}
        >
          <span
            style={{
              background: "#f5c518",
              color: "#000",
              padding: "8px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            ⭐ {movie.imdbRating}
          </span>

          <span
            style={{
              background: "#222",
              padding: "8px 14px",
              borderRadius: "20px",
            }}
          >
            📅 {movie.Year}
          </span>

          <span
            style={{
              background: "#222",
              padding: "8px 14px",
              borderRadius: "20px",
            }}
          >
            ⏱ {movie.Runtime}
          </span>
        </div>

        <p>
          <strong>🎭 Genre:</strong> {movie.Genre}
        </p>

        <p>
          <strong>🎬 Director:</strong> {movie.Director}
        </p>

        <p>
          <strong>👥 Cast:</strong> {movie.Actors}
        </p>

        <p>
          <strong>🌍 Language:</strong> {movie.Language}
        </p>

        <p>
          <strong>🏆 Awards:</strong> {movie.Awards}
        </p>

        <p style={{ marginTop: "25px", lineHeight: "1.8" }}>
          {movie.Plot}
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "35px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={addToWatchlist}
            style={{
              padding: "14px 24px",
              background: "#E50914",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            ❤️ Add to Watchlist
          </button>

          <button
            onClick={watchTrailer}
            style={{
              padding: "14px 24px",
              background: "#333",
              color: "white",
              border: "1px solid #666",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            🎬 Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;