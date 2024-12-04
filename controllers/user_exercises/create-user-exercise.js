import { Exercise_User } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";
export async function create_user_exercise(req, res) {
  // const t = await sequelize.transaction();
  
  try {
    const data = req.body;

    const new_exercise = await Exercise_User.create(data);
    // await t.commit();

    res.status(200).send({
      message: "Exercício criado com sucesso",
      exercise_user_id: new_exercise.id,
    });
  } catch (error) {
    // await t.rollback(); 
    res
      .status(500)
      .send({ message: "Erro no servidor. Tentar novamente mais tarde, erro: " + error});
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
  "ExerciseId": 1,
  "UserId": 1
}
*/
