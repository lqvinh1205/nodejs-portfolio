import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/projects";

const route = Router()

route.get('/projects', list)
route.get('/projects/:id', read)
route.post('/projects', create)
route.patch('/projects/:id', update)
route.delete('/projects:id', remove)

export default route