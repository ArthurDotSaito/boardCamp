import express from 'express';
import cors from 'cors';
import gameRouter from './routers/gameRouter.js';
import customerRouter from './routers/customerRouter.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT 

app.use(express.json());
app.use(cors());
app.use([gameRouter, customerRouter]);

app.listen(port, () => console.log(`server running on port ${port}`));