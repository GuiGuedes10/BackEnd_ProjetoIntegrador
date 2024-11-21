import { Exercise_User, User_Training } from "../../Banco_de_dados/models/index.js";

export async function get_training(req, res) {
  try {
    const { trainingId } = req.body;

    const training = await User_Training.findByPk(trainingId, {
      include: ["Exercise_Users"],
    });

    if (!training) {
      res.status(404).send({ message: "Treino não encontrado" });
      return;
    }

    res.status(200).send(training);
  } catch (error) {
    console.log("Error get_training:", error);
    res.status(500).send({
      message: "Erro no servidor. Tentar novamente mais tarde",
    });
  }
}

/*
Example payload:
{
  "trainingId": 1
}
*/

/*
Example response:
{
  "id": 1,
  "Name": "Treino A",
  "UserId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z", 
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "Pi_Exercise_Users": [
    {
      "id": 1,
      "Name": "Supino",
      "Repetitions": 12,
      "Series": 3,
      "Weight": 40,
      "Description": "Fazer com calma",
      "UserId": 1,
      "ExerciseId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
*/
