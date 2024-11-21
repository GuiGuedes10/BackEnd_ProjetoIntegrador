import express from "express";
import {
  get_user_exercise,
  create_user_exercise,
} from "../controllers/user_exercises/index.js";

export const userExerciseRoute = express
  .Router()
  .get("/get-user-exercise", get_user_exercise)
  .post("/create-user-exercise", create_user_exercise);
