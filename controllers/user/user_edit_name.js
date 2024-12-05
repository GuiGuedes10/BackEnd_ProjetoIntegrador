import { User } from "../../Banco_de_dados/models/index.js";

export async function edit_user_name(req, res) {
    
    const {UserId, newName} = req.body;

    try {
        await User.update({
            Name: newName},
        {where:{
            id:UserId
        }}
        )

        res.status(200).send({message:"Nome do usuario alterado"});
    } catch (error) {
        res.status(403).send({message:"Usuario não encontrado"}+ error);
        console.log(UserId, newName)
    }
}