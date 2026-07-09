import Navbar from "../components/navbar";
import Hero from "../components/hero";
import TrendingMovies from "../components/Trendingmovies";
import RandomMovie from "../components/RandomMovie";
import Footer from "../components/footer";

function Home({
  movies,
  popularMovies,
  top10Movies,
  recommendedMovies,
  fetchMovies,
}) {
  return (
    <>
      <Navbar />
      <Hero fetchMovies={fetchMovies} />

      <RandomMovie />

      <TrendingMovies
        title="🔥 Trending Movies"
        movies={movies}
      />

      <TrendingMovies
        title="🍿 Popular Movies"
        movies={popularMovies}
      />

      <TrendingMovies
        title="🏆 Top 10 Movies"
        movies={top10Movies}
      />

      <TrendingMovies
        title="⭐ You May Also Like"
        movies={recommendedMovies}
      />

      <Footer />
    </>
  );
}

export default Home;