import express from "express";
import {
    get_training_session,
    create_training_session,
    get_training_session_by_user_id
} from "../controllers/training_session/index.js";

export const trainingSessionRoute = express
  .Router()
  .get("/get-training-session", get_training_session)
  .post("/create-training-session", create_training_session)
  .get("/get-all-user-session", get_training_session_by_user_id);
