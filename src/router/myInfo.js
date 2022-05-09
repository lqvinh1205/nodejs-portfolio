import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/myInfo";

const route = Router()

route.get('/myinfo', read)
route.post('/myinfo', create)
route.patch('/myinfo', update)
route.delete('/myinfo', remove)

export default route