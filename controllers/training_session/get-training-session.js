import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

export async function get_training_session(req, res) {
  try {
    const { trainingSessionId } = req.body;

    const training_session = await User_Training_Session.findOne({
      where: {
        id: trainingSessionId
      },
      include: ['Exercise_Users']
    });

    if (!training_session) {
      return res.status(404).send({
        message: "Sessão de treino não encontrada"
      });
    }

    res.status(200).send({
      training_session
    });

  } catch (error) {
    res.status(500).send({ 
      message: "Erro no servidor. Tentar novamente mais tarde, erro: " + error 
    });
  }
}

/*
{
    "trainingSessionId": 1
}
*/