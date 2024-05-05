import express from 'express';
const router = express.Router();
import { home, addRoommate, getRoommates } from '../controllers/roomController.js';

//Prueba conexion
router.get("/", home);

router.post('/roommate', addRoommate);

router.get('/roommates', getRoommates);







export default router;