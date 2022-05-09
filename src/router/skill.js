import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/skill";

const route = Router()

route.get('/skills', list)
route.get('/skills/:id', read)
route.post('/skills', create)
route.patch('/skills/:id/edit', update)
route.delete('/skills/:id', remove)

export default route