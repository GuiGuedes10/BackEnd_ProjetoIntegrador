import bcrypt from "bcrypt"
import { User } from "../../Banco_de_dados/models/index.js";
import { CreateToken } from "../../utils/TokenHandle.js";

export async function cadastro_usuario (req, res) {
    try{
    const data = req.body
  
    const saltRounds = 10;
  
    bcrypt.genSalt(saltRounds, (err, salt) =>{
      if(err){
        console.error('Error on generate salt: ' + err);
        res.status(500).send({error_message: 'Erro no servidor. Tentar novamente mais tarde'})
        return;
      }
    bcrypt.hash(data.Senha, salt, async (err, hash) =>{
      if (err) {
        console.error("Error on generate hash: " + err );
        res.status(500).send({error_message: 'Erro no servidor. Tentar novamnete mais tarde'})
        return;
      }
  
      data.Senha = hash
      const new_user = await User.create(data)
      
      const token = CreateToken(new_user.id)
  
      res.send({id: new_user.id, token})
    })
    });
    
  
  }
    catch(error){
      console.log("Erro cadastro_usuario", error)
      res.status(500);
    }
  }