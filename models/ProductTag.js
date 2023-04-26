const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
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
    product_id: { // product_id column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // cannot be null
      references: {
        // references the product model's id
        model: "product",
        key: "id",
      },
    },
    tag_id: { // tag_id column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // cannot be null
      references: {
        // references the tag model's id
        model: "tag",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
