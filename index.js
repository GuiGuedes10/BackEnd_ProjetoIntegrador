import express from "express"
import cors from "cors"
import { User } from "./Banco_de_dados/model.js"
import bcrypt from "bcrypt"
import TokenVerification, {UserCreateToken} from "./utils/TokenHandle.js"

import 'dotenv/config';

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT;

app.post('/cadastro_usuario', async(req, res) => {
  try{
  const data = req.body

  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, (err, salt) =>{
    if(err){
      console.error('Error on generate salt: ' + err);
      res.status(500).send({error_message: 'Erro no servidor. Tentar novamnete mais tarde'})
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
    
    const token = UserCreateToken(new_user.id)

    res.send({id: new_user.id, token})
  })
  });
  

}
  catch(error){
    console.log("Erro cadastro_usuario", error)
    res.status(500);
  }
})

app.get("/get_usuarios", async(req, res) =>{
  
  const data = req.body;
  const TokenVerifed = TokenVerification(data.token)

  if(!TokenVerifed.valid){
    res.status(403).send({error_message:TokenVerifed.message});
    return
  }
  const rows = await User.findAll();
  res.status(200).send(rows);
});

app.post("/login", async(req, res) =>{
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
        const token = UserCreateToken(user.id)
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
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})