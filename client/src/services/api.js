import axios from "axios";

const API_KEY = "7d69dc3f";

const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const getMovies = async (search = "Batman") => {
  const response = await axios.get(`${API_URL}&s=${search}`);
 console.log(response.data);
 return response.data;
};
export async function getMovieDetails(id) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=7d69dc3f&i=${id}`
  );

  const data = await response.json();
  return data;
}