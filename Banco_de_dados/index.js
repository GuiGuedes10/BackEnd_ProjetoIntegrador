import { sequelize } from "./sq/index.js";

const syncDB = async () => {
  try {
    await sequelize.authenticate();

    await sequelize.sync();
  } catch (error) {
    console.log("erro", error);
  }
};

export {syncDB};
