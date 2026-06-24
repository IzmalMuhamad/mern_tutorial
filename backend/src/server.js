import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

import { setServers } from "node:dns/promises"; //add this line for Node.js v20+ to fix the DNS resolution issue

setServers(["1.1.1.1", "8.8.8.8"]); //add this line for Node.js v20+ to fix the DNS resolution issue

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
  })
)
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter); // Apply the rate limiter middleware to all routes

// Simple custom middleware to log incoming requests
// app.use((req, res, next) => {
//   console.log(`A request of ${req.method} method to ${req.url} is made.`);
//   next();
// });

app.get("/", (req, res) => {
  res.status(200).send("Go to /api/notes to see the notes through the API!");
});

app.use("/api/notes", notesRoutes);

// Connect to the database first and then start the server
// What's the use of an application if it can't connect to the database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
