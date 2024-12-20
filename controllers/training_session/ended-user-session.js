import { User_Training_Session } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function ended_user_training_session(req, res) {
    try {
        const { userId } = req.body;

        const now = new Date();

        const t = await sequelize.transaction();
        const training_sessions = await User_Training_Session.update(
            {
                endTime: now,
                completed: true
            },
            {
                where: {
                    UserId: userId,
                    completed: false
                }
            },
            { transaction: t }
        )
        await t.commit();

        if (!training_sessions || training_sessions.length === 0) {
            return res.status(404).send({
                message: "Nenhuma sessão de treino encontrada para este usuário"
            });
        }

        res.status(200).send({ message: 'Treino finalizado' })
    } catch (error) {
        await t.rollback();
        res.status(500).send({
            message: "Erro no servidor. Tentar novamente mais tarde, erro: " + error
        })

    }
}