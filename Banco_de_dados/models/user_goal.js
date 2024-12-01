import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const User_goal = sequelize.define("user_goal", {
    weeklyHours:{
        type: DataTypes.STRING,
        allowNull: false,
    }
});