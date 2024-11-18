import {
  User_Training,
  Exercise_User,
} from "../../Banco_de_dados/models/index.js";

export async function add_user_exercise_to_training(req, res) {
  try {
    const { trainingId, exerciseUserId } = req.body;

    const training = await User_Training.findByPk(trainingId);
    if (!training) {
      res.status(404).send({ error_message: "Treino não encontrado" });
      return;
    }

    const exerciseUser = await Exercise_User.findByPk(exerciseUserId);
    if (!exerciseUser) {
      res
        .status(404)
        .send({ error_message: "Exercício do usuário não encontrado" });
      return;
    }

    await training.addExercise_Users(exerciseUser);

    res.status(200).send({
      message: "Exercício adicionado ao treino com sucesso",
    });
  } catch (error) {
    console.log("Error add_user_exercise_to_training:", error);
    res.status(500).send({
      error_message: "Erro no servidor. Tentar novamente mais tarde",
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
