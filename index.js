import express from "express"
import cors from "cors"
import { sequelize, User } from "./Banco_de_dados/model.js"
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.post('/cadastro_usuario', async(req, res) => {
  try{
  const data = req.body

  const new_user = await User.create(data)
 
  res.send({id: new_user.id})}
  catch(error){
    console.log("Erro cadastro_usuario", error)
    res.status(400).send({ error_message: error });
  }
})

app.get("/get_usuarios", async(req, res) =>{
  const rows = await User.findAll();
  res.send(rows);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})