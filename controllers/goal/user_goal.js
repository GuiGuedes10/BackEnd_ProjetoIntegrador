import { User_goal } from "../../Banco_de_dados/models/user_goal.js";

export async function DefineUserHours(req, res){
    
    try {
        const data = req.body;

        const UserGoal = await User_goal.findOne({
            where:{id:data.Userid}
        })

        if(!UserGoal){
            await User_goal.create(data);
            res.status(200).send({message: "Meta do usuario criada com sucesso"})
        }

        else{
            await User_goal.update(
                {
                    weeklyHours: data.Hours
                },
                {
                    where:{
                        id: data.Userid
                    }
                }
            )
            res.status(200).send({message: "Meta do usuario alterada com sucesso"})
        }

    } catch (error) {
        res.status(500).send({message: "Erro. Tente novamente mais tarde, erro: ", error})
    }
}