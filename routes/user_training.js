import express from "express";
import {
  add_user_exercise_to_training,
  create_user_training,
  get_training,
  get_user_training_by_user_id
} from "../controllers/user_training/index.js";

export const userTrainingRoute = express
  .Router()
  .post("/create-user-training", create_user_training)
  .post("/add-user-exercise-to-training", add_user_exercise_to_training)
  .post("/get-training", get_training)
  .post("/get-user-training-by-user-id", get_user_training_by_user_id);
