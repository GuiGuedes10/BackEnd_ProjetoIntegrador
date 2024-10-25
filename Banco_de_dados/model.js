import { Sequelize, DataTypes } from "sequelize";

export const sequelize = new Sequelize("xe", "system", "1008",{
    host: "localhost",
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
        allowNull: false
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