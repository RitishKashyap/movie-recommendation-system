import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { toast } from "react-toastify";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);
 const removeFromWatchlist = async (id) => {
  try {
    await axios.delete(
      `http://localhost:5000/api/watchlist/${id}`
    );

    const updatedWatchlist = watchlist.filter(
      (movie) => movie.imdbID !== id
    );

    setWatchlist(updatedWatchlist);

   toast.success("Movie removed from Watchlist!");
  } catch (error) {
    console.error(error);
   toast.error("Failed to remove movie.");
  }
};

 useEffect(() => {
  fetchWatchlist();
}, []);

const fetchWatchlist = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/watchlist"
    );

    setWatchlist(response.data);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
      <Navbar />

      <div
        style={{
          background: "#111",
          minHeight: "100vh",
          color: "white",
          padding: "40px",
        }}
      >
        <h1>❤️ My Watchlist</h1>

        {watchlist.length === 0 ? (
          <p>No movies added yet.</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {watchlist.map((movie) => (
  <div key={movie.imdbID}>
    <MovieCard movie={movie} />

    <button
      onClick={() => removeFromWatchlist(movie.imdbID)}
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        background: "#E50914",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      🗑 Remove
    </button>
  </div>
))}
          </div>
        )}
      </div>
    </>
  );
}

export default Watchlist;