import { Exercise } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function create_exercise(req, res) {
  const t = await sequelize.transaction();
  
  try {
    const data = req.body;

    const t = await sequelize.transaction();
    const new_exercise = await Exercise.create(data, { transaction: t });
    await t.commit();

    res
      .status(200)
      .send({
        message: "Exercício criado com sucesso",
        exercise_id: new_exercise.id,
      });
  } catch (error) {
    await t.rollback();
    res
      .status(500)
      .send({ message: "Erro no servidor. Tentar novamente mais tarde" });
  }
}

/*
Example payload:
{
  "Name": "Supino Reto",
  "Default_Repetitions": 12,
  "Default_Series": 3,
  "Default_Weight": 40.5,
  "Description": "Exercício para peitoral com barra"
}
*/
