import { Exercise_User } from "../../Banco_de_dados/models/index.js";

export async function get_user_exercise(req, res) {
  try {
    const { userExerciseId } = req.body;

    const exerciseUser = await Exercise_User.findByPk(userExerciseId);
    
    if (!exerciseUser) {
      res.status(404).send({ error_message: "Exercício do usuário não encontrado" });
      return;
    }

    res.status(200).send(exerciseUser);
  } catch (error) {
    console.log("Error get_user_exercise:", error);
    res.status(500).send({
      error_message: "Erro no servidor. Tentar novamente mais tarde"
    });
  }
}

/*
{
  "userExerciseId": 1
}
*/
