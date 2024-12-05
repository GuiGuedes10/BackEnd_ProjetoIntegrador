import { User } from "../../Banco_de_dados/models/index.js";

export async function VeryfiUser(req, res) {
    
    const {userId, CPF} = req.body;

    try {
        
        const UserVeryfi = await User.findOne({
            where:{
                id: userId,
                CPF: CPF
            }
        })
        
        if(!UserVeryfi) res.status(403).send({message:"Usuario não encontrado"});

        else res.status(200).send({message:"Usuario encontrado"})

    } catch (error) {
        res.status(500).send({message:"Erro, ", error})
    }

}