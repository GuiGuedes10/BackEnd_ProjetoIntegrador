import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const User_Training_Session_Exercise = sequelize.define("User_Training_Session_Exercise", {
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
