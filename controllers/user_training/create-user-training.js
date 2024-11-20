import { User_Training } from "../../Banco_de_dados/models/index.js";

export async function create_user_training(req, res) {
  try {
    const data = req.body;
    
    const new_training = await User_Training.create(data);

    res.status(200).send({
      message: "Treino criado com sucesso",
      trainingId: new_training.id
    });

  } catch (error) {
    res
      .status(500)
      .send({ error_message: "Erro no servidor. Tentar novamente mais tarde" });
  }
}

/*
Example payload:
{
  "Name": "Treino de Peito",
  "UserId": 1
}
*/
