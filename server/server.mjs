import express from "express";
import cors from "cors";
import "./src/loadEnvironment.mjs";
import notes from "./src/routes/note.mjs";

const PORT = 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/note", notes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
