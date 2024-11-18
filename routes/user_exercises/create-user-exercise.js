import { Exercise_User } from "../../Banco_de_dados/models/index.js";

export async function create_user_exercise(req, res) {
  try {
    const data = req.body;

    const new_exercise = await Exercise_User.create(data);

    res.status(200).send({
      message: "Exercício criado com sucesso",
      exercise_user_id: new_exercise.id,
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
  "Name": "Supino Reto",
  "Repetitions": 12,
  "Series": 3,
  "Weight": 40.5,
  "Description": "Exercício para peitoral com barra",
  "UserId": 1,
  "ExerciseId": 1
}
*/
