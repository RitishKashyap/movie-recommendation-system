import MovieCard from "./moviecard";
import "./Trendingmovies.css";

function TrendingMovies({ title = "Movies", movies = [] }) {
  return (
    <section className="trending">
      <h2 className="trending-title">{title}</h2>

      {movies.length === 0 ? (
        <div
          style={{
            color: "white",
            textAlign: "center",
            padding: "60px",
            fontSize: "20px",
          }}
        >
          Loading movies...
        </div>
      ) : (
        <div className="trending-row">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TrendingMovies;