import express from "express";
const router = express.Router();
import { getGastos, addGastos, deleteGastos } from "../controllers/gastosControllers.js";

router.get('/gastos', getGastos);

router.post('/gastos', addGastos);

router.delete('/gastos', deleteGastos);



export default router;