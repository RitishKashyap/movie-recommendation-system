import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Watchlist from "./pages/watchlist";
import About from "./pages/about";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Movies from "./pages/Movies";

import {
  getMovies,
  getTrendingMovies,
  getPopularMovies,
  getTop10Movies,
  getRecommendedMovies,
  getRandomMovies,
} from "./services/api";

function App() {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [top10Movies, setTop10Movies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [randomMovies, setRandomMovies] = useState([]);

  useEffect(() => {
    fetchTrending();
    fetchPopularMovies();
    fetchTop10Movies();
    fetchRecommendedMovies();
    fetchRandomMovies();
  }, []);

  const fetchTrending = async () => {
    const data = await getTrendingMovies();
    setMovies(data || []);
  };

  const fetchPopularMovies = async () => {
    const data = await getPopularMovies();
    setPopularMovies(data || []);
  };

  const fetchTop10Movies = async () => {
    const data = await getTop10Movies();
    setTop10Movies(data || []);
  };

  const fetchRecommendedMovies = async () => {
    const data = await getRecommendedMovies();
    setRecommendedMovies(data || []);
  };

  const fetchRandomMovies = async () => {
    const data = await getRandomMovies();
    setRandomMovies(data || []);
  };

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
          element={
            <Home
              movies={movies}
              popularMovies={popularMovies}
              top10Movies={top10Movies}
              recommendedMovies={recommendedMovies}
              randomMovies={randomMovies}
              fetchMovies={fetchMovies}
            />
          }
        />

        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;