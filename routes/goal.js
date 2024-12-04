import express from "express";
import { DefineUserGoal, get_user_goal } from "../controllers/goal/index.js";

export const GoalsRoute = express
    .Router()
    .post("/define-user-goal", DefineUserGoal)
    .post("/get_goal_of_user", get_user_goal);