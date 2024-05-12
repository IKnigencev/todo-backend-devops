import { Sequelize } from "sequelize";
import { ToDoModel } from "./models/todo.model.js";

const sequelize = new Sequelize(
    process.env.DB_NAME, process.env.PG_USER, process.env.PG_PASS,
    {
      host: process.env.PG_HOST,
      dialect: "postgres"
    }
);

const modelDefiners = [
	ToDoModel
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

export default sequelize;
