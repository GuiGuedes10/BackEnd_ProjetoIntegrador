import express from "express";
import { cadastro_usuario, get_usuarios, Get_users_by_id, disable_user } from "../controllers/user/index.js";

export const userRoute = express
  .Router()
  .get('/get_usuarios', get_usuarios)
  .post('/cadastro_usuario',cadastro_usuario)
  .post('/Get_user', Get_users_by_id)
  .post('/disable-user', disable_user);
