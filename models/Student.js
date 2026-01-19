import { DataTypes, Sequelize } from "sequelize";
import 'dotenv/config'


export const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    dialect: 'mysql',
    logging: false
})


export const User = sequelize.define('Users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: {type:DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
    ganre: {type: DataTypes.STRING, allowNull: false},
    preferredCourse: {type:  DataTypes.STRING, allowNull: false},
    bylawsApproval: {type:  DataTypes.BOOLEAN, allowNull: false}

})


