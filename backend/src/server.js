import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Go to /api/notes to see the notes through the API!");
});

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
