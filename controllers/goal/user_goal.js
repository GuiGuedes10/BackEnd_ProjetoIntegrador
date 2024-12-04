import { User_goal } from "../../Banco_de_dados/models/user_goal.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

export async function DefineUserGoal(req, res) {
    try {
        const { Userid, Hours } = req.body;

        const UserGoal = await User_goal.findOne({
            where: { UserId: Userid }
        })

        if (!UserGoal) {
            const t = await sequelize.transaction();
            await User_goal.create({
                UserId: Userid,
                weeklyHours: Hours
            }, { transaction: t });
            await t.commit();
            res.status(200).send({ message: "Meta do usuario criada com sucesso" })
        }

        else {  
            const t = await sequelize.transaction();
            const newUserGoal = await User_goal.update(
                {
                    weeklyHours: Hours
                },
                {
                    where: {
                        UserId: Userid
                    }
                },
                { transaction: t }
            )
            await t.commit();
            if (newUserGoal) {
                res.status(200).send({ message: "Meta do usuario alterada com sucesso" })
            }
            else {
                res.status(400).send({ message: "Erro ao alterar meta do usuario" })
            }
        }

    } catch (error) {
        await t.rollback();
        res.status(500).send({ message: "Erro. Tente novamente mais tarde, erro: ", error })
    }
}