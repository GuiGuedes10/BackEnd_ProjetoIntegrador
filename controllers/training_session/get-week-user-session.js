import { User_Training_Session } from "../../Banco_de_dados/models/index.js";
import { Op } from "sequelize";
import moment from "moment";

export async function get_Week_Of_User(req, res) {
    try {

        const d = new Date();
        let day = d.getDay();

        const { userId } = req.body;

        const UserWeek = await User_Training_Session.findAll({
            where: {
                UserId: {
                    [Op.eq]: userId
                },
                completed: {
                    [Op.eq]: true
                },
                createdAt: {
                    [Op.gte]: moment().subtract(day, 'days').toDate()
                }
            }
        })

        if (UserWeek.length > 0) {
            for (let index = 0; index < UserWeek.length; index++) {
                const startTime = UserWeek[index].startTime;
                const endTime = UserWeek[index].endTime || new Date();

                const duration = endTime - startTime;

                UserWeek[index].dataValues.duration = duration;
            }
        }

        res.status(200).send(UserWeek)

    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'Erro: ' + error })
    }
}