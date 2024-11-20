import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

export async function create_training_session(req, res) {
  try {
    const data = req.body;

    const now = new Date();
    
    const new_training_session = await User_Training_Session.create({
        UserId: data.UserId,
        UserTrainingId: data.UserTrainingId,
        startTime: now,
        completed: false
    });

    res.status(200).send({
      message: "Treino criado com sucesso",
      trainingSessionId: new_training_session.id
    });

  } catch (error) {
    res
      .status(500)
      .send({ error_message: "Erro no servidor. Tentar novamente mais tarde" });
  }
}

/*
{
    "UserId": 1,
    "UserTrainingId": 1
}
*/