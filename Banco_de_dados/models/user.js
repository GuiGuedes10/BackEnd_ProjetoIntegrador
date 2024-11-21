import { DataTypes } from "sequelize";
import { sequelize } from "../sq/index.js";

export const User = sequelize.define("Pi_User", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Tipo: {
    type: DataTypes.ENUM("Administrador", "Gerente", "Usuario"),
    defaultValue: "Usuario",
    allowNull: false,
  },
});
