import express from "express";
import { get_everthing_hours, Validate_Maneger } from "../controllers/manager/index.js";

export const ManagerRoute = express
    .Router()
    .post("/get_everthing_hours", get_everthing_hours)
    .post("/Validate_Maneger", Validate_Maneger);
