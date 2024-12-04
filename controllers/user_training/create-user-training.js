import { User_Training } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function create_user_training(req, res) {
  try {
    const data = req.body;
    
    const t = await sequelize.transaction();
    const new_training = await User_Training.create(data, { transaction: t });
    await t.commit();

    res.status(200).send({
      message: "Treino criado com sucesso",
      trainingId: new_training.id
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
  "Name": "Treino de Peito",
  "UserId": 1
}
*/
