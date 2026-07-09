import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/api";
import { movieCollections } from "../data/movieCollections";
import "./Movies.css";
const featuredMovieTitles = [
  "John Wick",
  "Interstellar",
  "The Dark Knight",
  "Avatar",
  "Inception",
  "Avengers: Endgame",
  "Spider-Man: No Way Home",
  "Dune",
  "Top Gun: Maverick",
  "Oppenheimer"
];

function Movies() {
 const [moviesByGenre, setMoviesByGenre] = useState({});
const [loading, setLoading] = useState(true);

const [featuredMovies, setFeaturedMovies] = useState([]);
const [currentBanner, setCurrentBanner] = useState(0);
 useEffect(() => {
  fetchAllMovies();
}, []);
useEffect(() => {
  fetchAllMovies();
}, []);

useEffect(() => {
  if (featuredMovies.length === 0) return;

  const interval = setInterval(() => {
    setCurrentBanner((prev) => (prev + 1) % featuredMovies.length);
  }, 5000);

  return () => clearInterval(interval);
}, [featuredMovies]);


  const fetchAllMovies = async () => {
    try {
      const featuredData = await Promise.all(
  featuredMovieTitles.map(async (title) => {
    const data = await getMovies(title);
    return data.Search ? data.Search[0] : null;
  })
);

setFeaturedMovies(featuredData.filter(Boolean));
      const result = {};

      await Promise.all(
        Object.entries(movieCollections).map(async ([genre, movies]) => {
          const movieData = await Promise.all(
            movies.map(async (title) => {
              const data = await getMovies(title);
              return data.Search ? data.Search[0] : null;
            })
          );

          result[genre] = movieData.filter(Boolean);
        })
      );

      setMoviesByGenre(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2 className="loading">Loading Movies...</h2>;
  }

  return (
    <div className="movies-page">
     {featuredMovies.length > 0 && featuredMovies[currentBanner] && (
  <div className="hero-banner">
    <div className="hero-overlay">
      <h1>{featuredMovies[currentBanner]?.Title}</h1>

      <p>📅 {featuredMovies[currentBanner]?.Year}</p>

      <button className="explore-btn">
        View Details
      </button>
    </div>

    <img
      className="hero-poster"
      src={featuredMovies[currentBanner]?.Poster}
      alt={featuredMovies[currentBanner]?.Title}
    />
  </div>
)}
      <h1 className="movies-title">🎬 Explore Movies</h1>

      {Object.entries(moviesByGenre).map(([genre, movies]) => (
        <div className="genre-section" key={genre}>
          <h2 className="genre-title">{genre}</h2>

          <div className="movies-row">
            {movies.map((movie) => (
              <Link
                key={movie.imdbID}
                to={`/movie/${movie.imdbID}`}
                className="movie-card"
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-poster"
                />

                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Movies;