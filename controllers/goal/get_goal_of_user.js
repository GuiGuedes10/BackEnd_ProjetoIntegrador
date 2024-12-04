import { User_goal } from "../../Banco_de_dados/models/user_goal.js";

export async function get_user_goal(req, res) {
    try {
        const {Userid} = req.body;

        const GoalUser = await User_goal.findOne({
            where:{ UserId: Userid }
        })
        res.status(200).send(GoalUser);

        if(!GoalUser)res.status(500);
    } catch (error) {
        res.status(500).send({message: "Erro ao procurar meta do usuario, erro:"}, error );
    }
}