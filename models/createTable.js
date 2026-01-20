import { DataTypes } from "sequelize";
import { sequelize } from "./Student.js";

export const User = sequelize.define('UsersAccount', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: {type:DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
    ganre: {type: DataTypes.STRING, allowNull: false},
    preferredCourse: {type:  DataTypes.STRING, allowNull: false},
    bylawsApproval: {type:  DataTypes.BOOLEAN, allowNull: false}

})