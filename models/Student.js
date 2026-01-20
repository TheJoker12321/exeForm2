import { Sequelize } from "sequelize";


export const sequelize = new Sequelize({
    database: "users", //process.env.DB_NAME,
    username: "root", //process.env.USERNAME,
    password: "", // process.env.PASSWORD,
    dialect: 'mysql',
    logging: false
})





