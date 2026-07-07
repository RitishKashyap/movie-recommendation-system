import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import watchlistRoutes from "./routes/watchlist.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/watchlist", watchlistRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("🚀 Movie API is running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});