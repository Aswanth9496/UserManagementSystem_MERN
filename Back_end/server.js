
import express from "express"
import cors from "cors"
import connectToDatabase from "./config/db.js"
const app = express()

app.use(cors())
app.use(express.json())

connectToDatabase()

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is running: ${process.env.PORT}`)
})




