import { Router } from "express";
import { getUser, signin, signup } from "../controllers/auth";

const route = Router()

route.post('/signin', signin)
route.post('/signup', signup)
route.get('/users', getUser)

export default route