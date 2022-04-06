import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import projectRouter from './router/projects'
const app = express()

// midlewares
app.use(morgan('tiny'))
app.use(express.json())


//api
app.use("/api", projectRouter)

// conncect db
mongoose.connect("mongodb://localhost:27017/nodejs-portfolio")
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error))
 
//connect server
const PORT = 8000;
app.listen(PORT, () => {
    console.log("sever is running port: ", PORT);
})