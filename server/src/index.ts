import express, { Express } from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import financialRecordRouter from "../src/routes/financial-record"

dotenv.config()

const app: Express = express();

const port = process.env.PORT || 3001


app.use(express.json());

const mongoURI: string = process.env.DB_CONNECT || "";

mongoose.connect(mongoURI).then(() => {
    console.log("CONNECTED TO MONGODB")
})
    .catch((err) => console.error("Failed to connect MONGODB", err))


app.use("/financial-records",);

app.listen(port, () => {
    console.log(`Server running on Port ${port}`)
})
