import express from "express";
import { DefineUserHours } from "../controllers/goal/user_goal.js";

export const GoalsRoute = express
    .Router()
    .post("/goal", DefineUserHours)