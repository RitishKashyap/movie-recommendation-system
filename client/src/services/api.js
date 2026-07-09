import axios from "axios";

const API_KEY = "2df598cc";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const getMovies = async (search = "Batman") => {
  const response = await axios.get(
    `${API_URL}&s=${encodeURIComponent(search)}`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${API_URL}&i=${id}`);
  return response.data;
};

export const getTrendingMovies = async () => {
  const trendingTitles = [
    "Superman",
    "F1",
    "Jurassic World Rebirth",
    "Mission: Impossible",
    "Final Destination",
    "Ballerina",
    "Sinners",
    "How to Train Your Dragon",
    "Thunderbolts",
    "28 Years Later",
    "Oppenheimer",
    "Interstellar",
    "Inception",
    "The Dark Knight",
    "John Wick"
  ];

  const movies = await Promise.all(
    trendingTitles.map(async (title) => {
      const data = await getMovies(title);
      return data.Search ? data.Search[0] : null;
    })
  );

  return movies.filter(Boolean);
};

export const getPopularMovies = async () => {
  const popularTitles = [
    "Avatar",
    "Avatar: The Way of Water",
    "Titanic",
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Oppenheimer",
    "Dune",
    "Top Gun: Maverick",
    "Avengers: Endgame",
    "Spider-Man: No Way Home",
    "The Batman",
    "Joker",
    "The Shawshank Redemption",
    "Forrest Gump"
  ];

  const movies = await Promise.all(
    popularTitles.map(async (title) => {
      const data = await getMovies(title);
      return data.Search ? data.Search[0] : null;
    })
  );

  return movies.filter(Boolean);
};
export const getTop10Movies = async () => {
  const top10Titles = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "Fight Club",
    "Forrest Gump",
    "Inception",
    "Interstellar",
    "The Matrix"
  ];

  const movies = await Promise.all(
    top10Titles.map(async (title) => {
      const data = await getMovies(title);
      return data.Search ? data.Search[0] : null;
    })
  );

  return movies.filter(Boolean);
};
export const getRecommendedMovies = async () => {
  const recommendedTitles = [
    "Whiplash",
    "The Prestige",
    "Shutter Island",
    "The Green Mile",
    "The Departed",
    "The Wolf of Wall Street",
    "The Social Network",
    "The Truman Show",
    "The Pursuit of Happyness",
    "Catch Me If You Can",
    "The Imitation Game",
    "Prisoners",
    "Gone Girl",
    
  ];

  const movies = await Promise.all(
    recommendedTitles.map(async (title) => {
      const data = await getMovies(title);
      return data.Search ? data.Search[0] : null;
    })
  );

  return movies.filter(Boolean);
};
export const getRandomMovies = async () => {
 const randomTitles = [
  "Prisoners",
  "Nightcrawler",
  "Arrival",
  "Gone Girl",
  "No Country for Old Men",
  "Blade Runner 2049",
  "The Social Network",
  "La La Land",
  "Ford v Ferrari",
  "Edge of Tomorrow",
  "A Quiet Place",
  "The Revenant",
  "The Martian",
  "1917",
  "Knives Out",
  "The Imitation Game",
  "Baby Driver",
  "Logan",
  "Sicario",
  "The Grand Budapest Hotel",
  "Her",
  "Ex Machina",
  "The Nice Guys",
  "The Accountant",
  "Drive",
  "The Iron Claw",
  "Civil War",
  "Nobody",
  "Bullet Train",
  "Free Guy"
];

  const shuffled = randomTitles.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 15);

  const movies = await Promise.all(
    selected.map(async (title) => {
      const response = await axios.get(
        `${API_URL}&t=${encodeURIComponent(title)}`
      );
      return response.data;
    })
  );

  return movies.filter((movie) => movie.Response === "True");
};