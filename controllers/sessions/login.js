import { User } from "../../Banco_de_dados/models/index.js";
import { CreateToken } from "../../utils/TokenHandle.js";
import bcrypt from "bcrypt";

export async function login(req, res){
    try {
      const data = req.body;
      const user = await User.findOne({
        where:{
          Email: data.Email,
          Ativo: true
        }
      });
      if(!user){
        res.status(401).send({ message: "Usuario ou senha invalidos."});
        return;
      }
  
      bcrypt.compare(data.Senha, user.Senha, (err, results) =>{
        if(err) {
          console.error("Error comparing passwords :", err)
          res.status(500)
        }
  
        if(results){
          const token = CreateToken({userId: user.id, type: user.Tipo})
          res.status(200).send({userId: user.id, type: user.Tipo, token});
        } else {
          res.status(500).send({
            message: "Usuario ou senha incorretos!"
          })
        }
      })
    } catch (error) {
      console.log("Error login", error)
      res.status(500)
    }
  }