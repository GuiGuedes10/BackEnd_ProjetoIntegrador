import bcrypt from "bcrypt";
import { User } from "../../Banco_de_dados/models/index.js";
import { CreateToken } from "../../utils/TokenHandle.js";
import { Op } from "sequelize";

export async function cadastro_usuario(req, res) {
  try {
    const data = req.body;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { Email: data.Email },
          { CPF: data.CPF }
        ]
      },
    });

    if (existingUser) {
      const field = existingUser.Email === data.Email ? "email" : "CPF";
      return res.status(400).send({
        message: `Este ${field} já está cadastrado`,
      });
    }

    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        console.error("Error on generate salt: " + err);
        return res.status(500).send({
          message: "Erro no servidor. Tentar novamente mais tarde",
        });
      }
      bcrypt.hash(data.Senha, salt, async (err, hash) => {
        if (err) {
          console.error("Error on generate hash: " + err);
          return res.status(500).send({
            message: "Erro no servidor. Tentar novamnete mais tarde",
          });
        }

        data.Senha = hash;
        const new_user = await User.create(data);

        const token = CreateToken({ userId: new_user.id, type: new_user.Tipo });

        res.send({ id: new_user.id, type: new_user.Tipo, token });
      });
    });
  } catch (error) {
    console.log("Erro cadastro_usuario", error);
    res.status(500);
  }
}
