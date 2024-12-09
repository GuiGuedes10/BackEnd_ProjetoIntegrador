import { User } from "../../Banco_de_dados/models/index.js";


export async function Validate_Maneger(req, res) {
    
    try {
        const {UserId} = req.body;

        const IsManeger = await User.findOne({
            where:{
                id:UserId,
                Tipo: "Gerente"
            }
        })

        if(!IsManeger){
            res.status(401).send({message:"Acesso negado"});
        }
        else res.status(200).send({message:"Acesso concedido"});
    } catch (error) {
        res.status(404).send({message:"Erro ao buscar usuario, erro:", error});
    }
}