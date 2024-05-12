import DataTypes from "sequelize";

export const ToDoModel = (sequelize) =>{
  sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    },
    {},
  );
};
