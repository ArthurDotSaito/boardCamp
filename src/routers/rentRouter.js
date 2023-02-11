import { Router } from "express";
import { getRentals } from "../controllers/getRentals.js";

const rentRouter = Router();

rentRouter.get('/rentals', getRentals)

export default rentRouter;