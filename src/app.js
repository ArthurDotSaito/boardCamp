import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import gameRouter from './routers/gameRouter.js';
import customerRouter from './routers/customerRouter.js'
import rentRouter from './routers/rentRouter.js'

dotenv.config();
const app = express();
const port = process.env.PORT 

app.use(express.json());
app.use(cors());
app.use([gameRouter, customerRouter, rentRouter]);

app.listen(port, () => console.log(`server running on port ${port}`));