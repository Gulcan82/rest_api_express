// index.ts
import express from "express";
import notesRouter from "../routes/notes"; // Hier den korrekten Import verwenden

const app = express();

app.use("/notes", notesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});