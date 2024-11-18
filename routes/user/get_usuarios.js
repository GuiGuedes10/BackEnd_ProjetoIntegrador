import { User } from "../../Banco_de_dados/models/index.js";
import { TokenVerification } from "../../utils/TokenHandle.js";

export async function get_usuarios(req, res){
  
    const data = req.body;
    const TokenVerifed = TokenVerification(data.token)
  
    if(!TokenVerifed.valid){
      res.status(403).send({error_message:TokenVerifed.message});
      return
    }
    const rows = await User.findAll();
    res.status(200).send(rows);
  }