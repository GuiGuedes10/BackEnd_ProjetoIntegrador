import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

export async function user_running_session(req, res) {
    
    const {userId} = req.body;

    try {
        const session_running = await User_Training_Session.findOne({
            where:{
                UserId: userId,
                completed: false
            }
        })
        
        if(!session_running){
            res.status(500).send({message:"Usuario não possui uma sessão"})
        }
        else res.status(200).send(session_running);
        
    } catch (error) {
        console.log(error)
    }
    
}