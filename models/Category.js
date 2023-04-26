const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      // id column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // cannot be null
      primaryKey: true, // primary key
      autoIncrement: true, // auto increment
      validate: {
        // checks to see if the value is an integer
        isNumeric: true,
      },
    },
    category_name: {
      // category_name column
      type: DataTypes.STRING, // string
      allowNull: false, // cannot be null
      validate: {
        // checks to see if the value is between 1 and 30 characters long
        len: [1, 30],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
