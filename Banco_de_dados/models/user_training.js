import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const User_Training = sequelize.define("Pi_User_Training", {
    Name : {
        type: DataTypes.STRING,
        allowNull: false,
    }
})