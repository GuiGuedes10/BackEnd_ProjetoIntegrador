import express from "express";
import cors from "cors";
import "dotenv/config";

import { syncDB } from "./Banco_de_dados/index.js";

import { userRoute } from "./routes/user.js";
import { userTrainingRoute } from "./routes/user_training.js";
import { userExerciseRoute } from "./routes/user_exercises.js";
import { trainingSessionRoute } from "./routes/training_session.js";
import { exerciseRoute } from "./routes/exercises.js";
import { sessionsRoute } from "./routes/sessions.js";

const app = express();

app.use(cors());
app.use(express.json());

await syncDB();

app.use(userRoute);

app.use(userTrainingRoute);

app.use(userExerciseRoute);

app.use(trainingSessionRoute);

app.use(sessionsRoute);

app.use(exerciseRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
