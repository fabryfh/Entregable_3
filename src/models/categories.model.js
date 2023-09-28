import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Category = db.define(
    "categories",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING(50),
      },
    },
    {
        timestamps: false,
    }
);

export default Category;