import { Exercise } from "../../Banco_de_dados/models/index.js";

export async function get_exercise(req, res) {
  try {
    const { exerciseId } = req.body;

    const exercise = await Exercise.findByPk(exerciseId);
    
    if (!exercise) {
      res.status(404).send({ message: "Exercício não encontrado" });
      return;
    }

    res.status(200).send(exercise);
  } catch (error) {
    console.log("Error get_exercise:", error);
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
