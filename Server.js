import express from "express";
import "dotenv/config"

import routes from "./routes/ToDoRoutes.js";

import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}...`));
