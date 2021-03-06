import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import cors from "cors"
import projectRouter from './router/projects'
import myInfoRouter from './router/myInfo'
import skillRouter from './router/skill'
import authRouter from './router/auth'
const app = express()

// midlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

//api
app.use("/api", projectRouter)
app.use("/api", myInfoRouter)
app.use("/api", skillRouter)
app.use("/api", authRouter)

// conncect db
// mongoose.connect("mongodb+srv://lqvinh1205:tmkgg123@cluster.rzbt7.mongodb.net/portfolio?retryWrites=true&w=majority")
//     .then(() => console.log("Kết nối db thành công"))
//     .catch((error) => console.log(error))
 
mongoose.connect("mongodb://127.0.0.1:27017/nodejs-portfolio")
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error))
 
//connect server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("sever is running port: ", PORT);
})