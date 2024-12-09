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
import { TokenDecode, TokenVerification } from "./utils/TokenHandle.js";
import { GoalsRoute } from "./routes/goal.js";
import { ManagerRoute } from "./routes/manager.js"

await syncDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  const publicPaths = ["/cadastro_usuario", "/validate-token", "/login"];

  if (!publicPaths.includes(req.path)) {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    try {
      const tokenVerification = TokenVerification(token);
      if (!tokenVerification.valid) {
        return res.status(401).json({ error: tokenVerification.message });
      }
    } catch (error) {
      return res.status(401).json({ error: "Token validation failed" });
    }
  }

  next();
});

app.use((req, res, next) => {
  if (req.path == "/get_usuarios" || req.path == "/get_everthing_hours" || req.path == "/Validate_Maneger") {
    const token = req.headers.authorization;
    const decoded = TokenDecode(token);

    if (!decoded || !["Administrador", "Gerente"].includes(decoded.type)) {
      return res.status(403).json({ error: "Acesso não autorizado" });
    }
  }
  next();
});

app.use(userRoute);

app.use(userTrainingRoute);

app.use(userExerciseRoute);

app.use(trainingSessionRoute);

app.use(sessionsRoute);

app.use(exerciseRoute);

app.use(GoalsRoute);

app.use(ManagerRoute);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
