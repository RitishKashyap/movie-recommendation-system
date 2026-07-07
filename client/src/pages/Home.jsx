
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingMovies from "../components/TrendingMovies";
import Footer from "../components/Footer";

function Home({ movies, fetchMovies }) {
  return (
    <>
      <Navbar />
      <Hero fetchMovies={fetchMovies} />
      <TrendingMovies movies={movies} />
      <Footer />
    </>
  );
}

export default Home;