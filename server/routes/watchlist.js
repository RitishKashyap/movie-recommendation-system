import express from "express";
import Watchlist from "../models/Watchlist.js";

const router = express.Router();

// Get all watchlist movies
router.get("/", async (req, res) => {
  const movies = await Watchlist.find();
  res.json(movies);
});

// Add a movie to watchlist
router.post("/", async (req, res) => {
  try {
    const movie = new Watchlist(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
// Delete a movie from watchlist
router.delete("/:id", async (req, res) => {
  try {
    await Watchlist.findOneAndDelete({ imdbID: req.params.id });

    res.json({ message: "Movie removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;