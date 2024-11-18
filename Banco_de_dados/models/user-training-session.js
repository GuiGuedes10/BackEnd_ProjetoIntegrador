import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const User_Training_Session = sequelize.define("User_Training_Session", {
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
