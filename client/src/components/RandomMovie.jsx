import { useNavigate } from "react-router-dom";

function RandomMovie() {
  const navigate = useNavigate();

  const randomMovies = [
    "tt1375666", // Inception
    "tt0816692", // Interstellar
    "tt0468569", // The Dark Knight
    "tt0111161", // Shawshank Redemption
    "tt0133093", // The Matrix
    "tt4154796", // Avengers: Endgame
    "tt10872600", // Spider-Man: No Way Home
    "tt1160419", // Dune
    "tt9362722", // Spider-Man: Across the Spider-Verse
    "tt1877830", // The Batman
    "tt1745960", // Top Gun: Maverick
    "tt15398776", // Oppenheimer
    "tt7286456", // Joker
    "tt1853728", // Django Unchained
    "tt0993846", // The Wolf of Wall Street
  ];

  const pickMovie = () => {
    const random =
      randomMovies[Math.floor(Math.random() * randomMovies.length)];

    navigate(`/movie/${random}`);
  };

  return (
    <div
      style={{
        background: "#1b1b1b",
        margin: "50px",
        padding: "40px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "white" }}>
        🎲 Can't Decide What To Watch?
      </h1>

      <p
        style={{
          color: "#bbb",
          fontSize: "18px",
          marginTop: "10px",
        }}
      >
        Press the button and we'll choose a movie for you!
      </p>

      <button
        onClick={pickMovie}
        style={{
          marginTop: "25px",
          padding: "15px 35px",
          background: "#E50914",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        🎬 Pick a Movie
      </button>
    </div>
  );
}

export default RandomMovie;