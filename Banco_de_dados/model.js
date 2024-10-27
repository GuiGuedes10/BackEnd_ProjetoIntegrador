import { Sequelize, DataTypes } from "sequelize";
import 'dotenv/config'

const host = process.env.HOST_DB
const pass  = process.env.PASS_DB
const user  = process.env.USER_BD
const name  = process.env.NAME_DB



export const sequelize = new Sequelize(name, user, pass,{
    host,
    dialect: "oracle"
});
export const User = sequelize.define("Pi_User", {
    Name : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone : {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CPF:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Senha : {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const syncDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("ok")

        await sequelize.sync({force:true});
    } catch (error) {
        console.log("erro", error);
        
    }
};
syncDB();