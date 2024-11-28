import { User_Training } from "../../Banco_de_dados/models/index.js";

export async function get_user_training_by_user_id(req, res) {
  try {
    const { userId } = req.body;

    const trainings = await User_Training.findAll({
      where: {
        UserId: userId
      },
      include: ["Exercise_Users"]
    });

    if (!trainings || trainings.length === 0) {
      res.status(404).send({ message: "Nenhum treino encontrado para este usuário" });
      return;
    }

    res.status(200).send(trainings);
  } catch (error) {
    console.log("Error get_user_training_by_user_id:", error);
    res.status(500).send({
      message: "Erro no servidor. Tentar novamente mais tarde"
    });
  }
}

/*
Example request:
{
  "userId": 1
}

Example response:
[
  {
    "id": 1,
    "Name": "Treino A",
    "UserId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "Exercise_Users": [
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
]
*/
