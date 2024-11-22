import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

export async function get_training_session_by_user_id(req, res) {
  try {
    const { userId } = req.body;

    const training_sessions = await User_Training_Session.findAll({
      where: {
        UserId: userId
      },
    });

    if (!training_sessions || training_sessions.length === 0) {
      return res.status(404).send({
        message: "Nenhuma sessão de treino encontrada para este usuário"
      });
    }

    res.status(200).send({
      training_sessions
    });

  } catch (error) {
    res.status(500).send({ 
      message: "Erro no servidor. Tentar novamente mais tarde, erro: " + error 
    });
  }
}

/*
{
    "userId": 1
}
*/