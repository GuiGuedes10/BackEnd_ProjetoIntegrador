import { User_Training_Session } from "../../Banco_de_dados/models/index.js";
import { sequelize } from "../../Banco_de_dados/sq/index.js";

const end_user_training_session = async (req, res) => {
  // const t = await sequelize.transaction();
  
  try {
    const { training_session_id } = req.body;

    

    // Find and update the training session
    const result = await User_Training_Session.update(
      { endTime: new Date(),
        completed: true
       },
      { 
        where: { id: training_session_id },
        returning: true
      });
    // await t.commit();

    if (result[0] === 0) {
      return res.status(404).json({ 
        error: "Training session not found" 
      });
    }

    return res.status(200).json({
      message: "Training session ended successfully",
      training_session: result[1][0]
    });

  } catch (error) {
    // await t.rollback();
    return res.status(500).json({
      error: "Internal server error while ending training session, error: " + error
    });
  }
};

export { end_user_training_session };
