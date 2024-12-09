import { User } from "../../Banco_de_dados/models/index.js";
import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

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
            },
        )

        if (!user) {
            res.status(404).send({
                message: 'Usuario não encontrado'
            })
        }

        const session_running = await User_Training_Session.findOne({
            where:{
                UserId: userId,
                completed: false
            }
        })
        
        if(!session_running){
            res.status(404).send({message:"Usuario não possui uma sessão"})
        }
        else {
            const now = new Date();

            await User_Training_Session.update(
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
            )
        }

        res.status(200).send({ message: 'Usuário desativado' })
    } catch (error) {
        res.status(500).send({
            message: "Erro no servidor. Tentar novamente mais tarde, erro: " + error
        })

    }
}