// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: { // id column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // cannot be null
      primaryKey: true, // primary key
      autoIncrement: true, // auto increment
      validate: {
        // checks to see if the value is an integer
        isNumeric: true,
      },
    },
    product_name: { // product_name column
      type: DataTypes.STRING, // string
      allowNull: false, // cannot be null
      validate: {
        // checks to see if the value is between 1 and 30 characters long
        len: [1, 30],
      },
    },
    price: { // price column
      type: DataTypes.DECIMAL(10, 2), // decimal
      allowNull: false, // cannot be null
      validate: {
        // checks to see if the value is a decimal
        isDecimal: true,
      },
    },
    stock: { // stock column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // cannot be null
      defaultValue: 10, // default value is 10
      validate: {
        // checks to see if the value is an integer
        isNumeric: true,
      },
    },
    category_id: { // category_id column
      type: DataTypes.INTEGER, // integer
      allowNull: true, // can be null
      references: {
        // references the category model's id
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
