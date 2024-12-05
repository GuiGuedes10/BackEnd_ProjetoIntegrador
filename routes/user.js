import express from "express";
import { cadastro_usuario, get_usuarios, Get_users_by_id, disable_user, VeryfiUser, edit_user_name } from "../controllers/user/index.js";

export const userRoute = express
  .Router()
  .post('/get_usuarios', get_usuarios)
  .post('/cadastro_usuario',cadastro_usuario)
  .post('/Get_user', Get_users_by_id)
  .post('/disable-user', disable_user)
  .post('/VeryfiUser', VeryfiUser)
  .post("/edit_user_name", edit_user_name);
