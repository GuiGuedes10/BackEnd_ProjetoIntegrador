import express from "express";
import { create_exercise, get_exercise } from "../controllers/exercises/index.js";

export const exerciseRoute = express
  .Router()
  .post("/create-exercise", create_exercise)
  .get("/get-exercise", get_exercise);