import { Exercise } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function get_exercise(req, res) {
  try {
    const { exerciseId } = req.body;

    const t = await sequelize.transaction();
    const exercise = await Exercise.findByPk(exerciseId, { transaction: t });
    await t.commit();
    
    if (!exercise) {
      res.status(404).send({ message: "Exercício não encontrado" });
      return;
    }

    res.status(200).send(exercise);
  } catch (error) {
    await t.rollback();
    res.status(500).send({
      message: "Erro no servidor. Tentar novamente mais tarde"
    });
  }
}

/*
{
  "exerciseId": 1
}
*/
