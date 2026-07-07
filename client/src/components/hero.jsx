import { useState } from "react";
import "./Hero.css";
import heroImage from "../assets/images/hero.jpg";

function Hero({ fetchMovies }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.85)), url(${heroImage})`,
      }}
    >
      <div className="overlay">
        <h1>
          Discover Your Next <span>Favorite Movie</span>
        </h1>

        <p>
          Search thousands of movies, explore ratings and build your own watchlist.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={() => fetchMovies(search)}>
            Search
          </button>
         <select
  value={genre}
  onChange={(e) => {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);

    if (selectedGenre === "Action") fetchMovies("Avengers");
    if (selectedGenre === "Comedy") fetchMovies("Hangover");
    if (selectedGenre === "Horror") fetchMovies("Conjuring");
    if (selectedGenre === "Sci-Fi") fetchMovies("Interstellar");
    if (selectedGenre === "Romance") fetchMovies("Titanic");
    if (selectedGenre === "Animation") fetchMovies("Toy Story");
  }}
>
  <option value="">Select Genre</option>
  <option value="Action">Action</option>
  <option value="Comedy">Comedy</option>
  <option value="Horror">Horror</option>
  <option value="Sci-Fi">Sci-Fi</option>
  <option value="Romance">Romance</option>
  <option value="Animation">Animation</option>
</select>
        </div>
      </div>
    </div>
  );
}

export default Hero;