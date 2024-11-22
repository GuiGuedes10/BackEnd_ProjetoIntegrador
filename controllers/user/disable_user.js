import { User } from "../../Banco_de_dados/models/index.js";

export async function disable_user(req, res) {
    try {
        const { userId } = req.body;

        const user = await User.update(
            {
                Ativo: false
            },
            {
                where: {
                    id: userId
                }
            }
        )

        if (!user) {
            res.status(404).send({
                message: 'Usuario não encontrado'
            })
        }

        res.status(200).send({ message: 'Usuário desativado' })
    } catch (error) {
        res.status(500).send({
            message: "Erro no servidor. Tentar novamente mais tarde, erro: " + error
        })

    }
}