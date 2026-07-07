import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { useEffect, useState } from "react";
import { getMovies } from "./services/api";
import Watchlist from "./pages/Watchlist";
import About from "./pages/About";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies("Spider Man");
  }, []);

  const fetchMovies = async (movieName) => {
    const data = await getMovies(movieName);

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} fetchMovies={fetchMovies} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
       <Route path="/watchlist" element={<Watchlist />} />
<Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;