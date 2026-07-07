import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
  imdbID: {
    type: String,
    required: true,
    unique: true,
  },
  Title: {
    type: String,
    required: true,
  },
  Poster: {
    type: String,
  },
  Year: {
    type: String,
  },
});

const Watchlist = mongoose.model("Watchlist", watchlistSchema);

export default Watchlist;