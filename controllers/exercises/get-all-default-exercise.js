import { Exercise } from "../../Banco_de_dados/models/index.js";

export async function get_all_default_exercise(req, res) {
    try {
        const AllExercise = await Exercise.findAll();

        res.status(200).send(AllExercise);
    } catch (error) {
        res.status(500).send({message: "Erro ao mandar exerciceos default, erro:", error});
    }
}