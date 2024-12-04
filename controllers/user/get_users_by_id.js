import { User } from "../../Banco_de_dados/models/index.js";

export async function Get_users_by_id(req, res) {
    try {
        const {UserId} = req.body;

        console.log(UserId);
        const SearchUser = await User.findOne({
            where:{
                id:UserId
            }
        })
        res.status(200).send(SearchUser);
    } catch (error) {
        res.status(500).send({message: "Erro ao procurar usuario, erro: ", error});
    }
}