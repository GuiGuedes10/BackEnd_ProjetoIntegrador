import { User } from "../../Banco_de_dados/models/index.js";
import { CreateToken } from "../../utils/TokenHandle.js";
import bcrypt from "bcrypt";

export async function login(req, res){
    try {
      const data = req.body;
      const user = await User.findOne({
        where:{Email: data.Email}
      });
      if(!user){
        res.status(401).send({ error_message: "Usuario ou senha invalidos."});
        return;
      }
  
      bcrypt.compare(data.Senha, user.Senha, (err, results) =>{
        if(err) {
          console.error("Error comparing passwords :", err)
          res.status(500)
        }
  
        if(results){
          const token = CreateToken(user.id)
          res.status(200).send({userId: user.id, token});
        } else {
          res.status(500).send({
            error_message: "Usuario ou senha incorretos!"
          })
        }
      })
    } catch (error) {
      console.log("Error login", error)
      res.status(500)
    }
  }