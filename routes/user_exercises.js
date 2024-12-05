import express from "express";
import {
  get_user_exercise,
  create_user_exercise,
  get_all_user_exercises
} from "../controllers/user_exercises/index.js";

export const userExerciseRoute = express
  .Router()
  .post("/get-user-exercise", get_user_exercise)
  .post("/create-user-exercise", create_user_exercise)
  .post("/get-all-user-exercises", get_all_user_exercises);
