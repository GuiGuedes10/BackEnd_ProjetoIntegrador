import express from "express";
import {
    get_training_session,
    create_training_session,
    get_training_session_by_user_id,
    end_user_training_session,
    get_time_training_session,
    get_Week_Of_User,
    user_running_session,
    verify_user_running_session,
    get_everthing_hours
} from "../controllers/training_session/index.js";

export const trainingSessionRoute = express
  .Router()
  .get("/get-training-session", get_training_session)
  .post("/create-training-session", create_training_session)
  .get("/get-all-user-session", get_training_session_by_user_id)
  .post("/end-user-training-session", end_user_training_session)
  .get("/get-time-training-session", get_time_training_session)
  .post("/get_Week_Of_User", get_Week_Of_User)
  .post("/user_running_session", user_running_session)
  .post("/verify_user_running_session", verify_user_running_session)
  .post("/get_everthing_hours", get_everthing_hours);
