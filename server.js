import express from 'express'
import { sequelize,  User } from './models/Student.js'

const PORT = 3001

const app = express()
app.use(express.urlencoded({extended: true}))


app.post('/register', async(req, res) => {

    Number(req.body["age"])
    Boolean(req.body["bylawsApproval"])

    await User.create(req.body)
    
})

async function start() {

    try {

        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (err) {

        throw new Error ("Failed to start:", err.message);

    }
}

start()