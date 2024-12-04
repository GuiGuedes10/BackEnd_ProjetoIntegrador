import {
  User_Training,
  Exercise_User,
} from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function add_user_exercise_to_training(req, res) {
  try {
    const { trainingId, exerciseUserId } = req.body;

    const training = await User_Training.findByPk(trainingId);
    if (!training) {
      res.status(404).send({ message: "Treino não encontrado" });
      return;
    }

    const exerciseUser = await Exercise_User.findByPk(exerciseUserId);
    if (!exerciseUser) {
      res
        .status(404)
        .send({ message: "Exercício do usuário não encontrado" });
      return;
    }

    const t = await sequelize.transaction();
    await training.addExercise_Users(exerciseUser, { transaction: t });
    await t.commit();

    res.status(200).send({
      message: "Exercício adicionado ao treino com sucesso",
    });
  } catch (error) {
    await t.rollback();
    console.log("Error add_user_exercise_to_training:", error);
    res.status(500).send({
      message: "Erro no servidor. Tentar novamente mais tarde",
    });
  }
}

/*
Example payload:
{
  "trainingId": 1,
  "exerciseUserId": 1
}
*/
