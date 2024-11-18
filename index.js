import express from "express";
import cors from "cors";
import "dotenv/config";

import { syncDB } from "./Banco_de_dados/index.js";

import { cadastro_usuario } from "./routes/user/cadastro_usuario.js";
import { get_usuarios } from "./routes/user/get_usuarios.js";
import { login } from "./routes/sessions/login.js";
import { validateToken } from "./routes/sessions/validade-token.js";
import { create_exercise } from "./routes/exercises/create-exercise.js";
import { create_user_exercise } from "./routes/User_Exercises/create-user-exercise.js";
import { create_user_training } from "./routes/user_training/create-user-training.js";
import { add_user_exercise_to_training } from "./routes/user_training/add-user-exercise-to-training.js";
import { get_training } from "./routes/user_training/get-training.js";
import { get_exercise } from "./routes/exercises/get-exercise.js";
import { get_user_exercise } from "./routes/user_exercises/get-user-exercise.js";
import { create_training_session } from "./routes/training_session/create-training-session.js";
import { get_training_session } from "./routes/training_session/get-training-session.js";

const app = express();

app.use(cors());
app.use(express.json());

await syncDB();

app.post("/cadastro_usuario", async (req, res) => cadastro_usuario(req, res));

app.get("/get_usuarios", async (req, res) => get_usuarios(req, res));

app.post("/login", async (req, res) => login(req, res));

app.post("/validate-token", async (req, res) => validateToken(req, res));

app.post("/create-exercise", async (req, res) => create_exercise(req, res));

app.get("/get-exercise", async (req, res) => get_exercise(req, res));

app.post("/create-user-exercise", async (req, res) =>
  create_user_exercise(req, res)
);

app.get("/get-user-exercise", async (req, res) => get_user_exercise(req, res));

app.post("/create-user-training", async (req, res) =>
  create_user_training(req, res)
);

app.post("/add-user-exercise-to-training", async (req, res) =>
  add_user_exercise_to_training(req, res)
);

app.get("/get-training", async (req, res) => get_training(req, res));

app.post("/create-training-session", async (req, res) =>
  create_training_session(req, res)
);  

app.get("/get-training-session", async (req, res) =>
  get_training_session(req, res)
);  

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
