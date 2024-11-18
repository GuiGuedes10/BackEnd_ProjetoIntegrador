import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const Exercise = sequelize.define("Pi_Exercise", {
    Name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Default_Repetitions : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Default_Series : {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Default_Weight : {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    Description : {
        type: DataTypes.STRING,
        allowNull: true,
    },
})


