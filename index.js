import express from 'express';
import roomRouter from './routes/roomRouter.js';
import gastosRouter from './routes/gastosRouter.js';

const app = express();
const PORT = process.env.PORT || 3014;

// Middlewares
app.use(express.json());
app.use('/', roomRouter);
app.use('/', gastosRouter);

app.listen(PORT, () => {
    console.log(`El servidor está levantado en el puerto http://localhost:${PORT}`)
});



