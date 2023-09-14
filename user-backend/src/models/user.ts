import { Model } from "sequelize";
import { DataTypes } from "sequelize";
import { UserAttributes } from "../interfaces/interfaces";
import sequelize from "../database/database";

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const users = sequelize.define<UserInstance>("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
 },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default users;