import express, { Router } from 'express'
import cors from 'cors'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.user(routers);

app.listen(port, () => `server running on port ${port}`);