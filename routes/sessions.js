import express from "express";
import { login, validateToken } from "../controllers/sessions/index.js";

export const sessionsRoute = express
  .Router()
  .post("/login", login)
  .post("/validate-token", validateToken);
