import { User_Training_Session } from "../../Banco_de_dados/models/index.js";

const get_time_training_session = async (req, res) => {
  try {
    const { training_session_id } = req.body;

    const trainingSession = await User_Training_Session.findOne({
      where: { id: training_session_id }
    });

    if (!trainingSession) {
      return res.status(404).json({
        error: "Training session not found"
      });
    }

    const startTime = trainingSession.startTime;
    const endTime = trainingSession.endTime || new Date(); // Use current time if endTime is null

    // Calculate duration
    const duration = endTime - startTime; // Duration in milliseconds

    return res.status(200).json({
      training_session_id,
      startTime,
      endTime: trainingSession.endTime || null,
      duration,
      isOngoing: !trainingSession.endTime // Flag to indicate if session is still ongoing
    });

  } catch (error) {
    console.error("Error getting training session time:", error);
    return res.status(500).json({
      error: "Internal server error while getting training session time"
    });
  }
};

export { get_time_training_session };

