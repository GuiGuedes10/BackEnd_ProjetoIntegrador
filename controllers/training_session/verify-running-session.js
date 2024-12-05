import { User_Training, User_Training_Session, User_Training_Session_Exercise } from "../../Banco_de_dados/models/index.js";

export async function verify_user_running_session(req, res) {

    const { userid } = req.body;
    console.log(userid)

    try {
        const ExisteRunningSession = await User_Training_Session.findOne({
            where: {
                UserId: userid,
                completed: false
            }
        })

        const RunningExercices = await User_Training.findOne({
            where:{
                id: ExisteRunningSession.UserTrainingId
            },
            include:['Exercise_Users']
        })

        if (!ExisteRunningSession) res.status(403).send({ message: "usuario não esta em uma sessão" })
        else {
            const day = new Date();

            const duration = day - ExisteRunningSession.startTime;
            console.log(duration)
            res.status(200).send({ duration: duration, trainingSession:ExisteRunningSession, sessionExercises:RunningExercices })
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Erro ao procurar usuario, erro:", err })
    }
}