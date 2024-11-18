import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const Exercise_User = sequelize.define("Pi_Exercise_User", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Repetitions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Series: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
