import { Router } from "express";
import { getRentals } from "../controllers/getRentals.js";
import { postRental } from "../controllers/postRental.js";
import { postRentalValidation } from "../middlewares/postRentalValidation.js";

const rentRouter = Router();

rentRouter.get('/rentals', getRentals)
rentRouter.post('/rentals', postRentalValidation, postRental)

export default rentRouter;