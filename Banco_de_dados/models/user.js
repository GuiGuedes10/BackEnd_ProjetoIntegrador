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
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false,
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
  Ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  }
});
