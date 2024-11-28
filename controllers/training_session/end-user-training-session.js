import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

const end_user_training_session = async (req, res) => {
  try {
    const { training_session_id } = req.body;

    // Find and update the training session
    const result = await User_Training_Session.update(
      { endTime: new Date() },
      { 
        where: { id: training_session_id },
        returning: true
      }
    );

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
    console.error("Error ending training session:", error);
    return res.status(500).json({
      error: "Internal server error while ending training session"
    });
  }
};

export { end_user_training_session };
