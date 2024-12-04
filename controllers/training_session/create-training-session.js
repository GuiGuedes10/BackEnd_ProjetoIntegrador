import { User_Training_Session } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function create_training_session(req, res) {
  // const t = await sequelize.transaction();
  
  try {
    const data = req.body;

    const now = new Date();
    const week = now.getDay();
    
    const new_training_session = await User_Training_Session.create({
        UserId: data.UserId,
        UserTrainingId: data.UserTrainingId,
        startTime: now,
        completed: false,
        weekDay: week

    });
    // await t.commit();

    res.status(200).send({
      message: "Treino criado com sucesso",
      trainingSessionId: new_training_session.id
    });

  } catch (error) {
    // await t.rollback();
    res
      .status(500)
      .send({ message: "Erro no servidor. Tentar novamente mais tarde" });
  }
}

/*
{
    "UserId": 1,
    "UserTrainingId": 1
}
*/