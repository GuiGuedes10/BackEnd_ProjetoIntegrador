import { User } from "../../Banco_de_dados/models/index.js";

export async function get_usuarios(req, res){
  
    const data = req.body;

    const rows = await User.findAll();
    res.status(200).send(rows);
  }