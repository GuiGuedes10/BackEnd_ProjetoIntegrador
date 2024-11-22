import express from "express";
import { cadastro_usuario, get_usuarios, disable_user } from "../controllers/user/index.js";

export const userRoute = express
  .Router()
  .get('/get_usuarios', get_usuarios)
  .post('/cadastro_usuario',cadastro_usuario)
  .post('/disable-user', disable_user);
