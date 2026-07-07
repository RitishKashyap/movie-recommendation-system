import{Link} from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "220px",
        background: "#1b1b1b",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px", color: "white" }}>
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>

       <Link
  to={`/movie/${movie.imdbID}`}
  onClick={() => console.log(movie.imdbID)}
  style={{ textDecoration: "none" }}
>
  <button
    style={{
      width: "100%",
      padding: "10px",
      background: "#E50914",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    View Details
  </button>
</Link>
      </div>
    </div>
  );
}

export default MovieCard;