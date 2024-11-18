import { Sequelize } from "sequelize";
import "dotenv/config";

const host = process.env.HOST_DB;
const pass = process.env.PASS_DB;
const user = process.env.USER_BD;
const name = process.env.NAME_DB;

export const sequelize = new Sequelize(name, user, pass, {
  host,
  dialect: "oracle",
});