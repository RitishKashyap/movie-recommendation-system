import MovieCard from "./MovieCard";

function TrendingMovies({ movies }) {
  return (
    <div className="trending">
      <h2
        style={{
          color: "white",
          marginLeft: "40px",
          marginBottom: "20px",
        }}
      >
        🔥 Trending Movies
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default TrendingMovies;