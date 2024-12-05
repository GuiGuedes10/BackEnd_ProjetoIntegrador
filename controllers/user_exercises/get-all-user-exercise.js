import { Exercise_User } from "../../Banco_de_dados/models/index.js";

export async function get_all_user_exercises(req, res) {
  try {
    const { userId } = req.body;

    const exerciseUsers = await Exercise_User.findAll({
      where: {
        UserId: userId
      }
    });

    if (!exerciseUsers) {
      res.status(404).send({ message: "Exercício do usuário não encontrado" });
      return;
    }

    res.status(200).send(exerciseUsers);
  } catch (error) {
    console.log("Error get_user_exercise:", error);
    res.status(500).send({
      message: "Erro no servidor. Tentar novamente mais tarde"
    });
  }
}

/*
{
  "userId": 1
}
*/
