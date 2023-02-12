import { Router } from "express";
import { getRentals } from "../controllers/getRentals.js";
import { postRental } from "../controllers/postRental.js";
import { postReturnRental } from "../controllers/postReturnRental.js";
import { checkRentalByID } from "../middlewares/checkRentalByID.js";
import { postRentalValidation } from "../middlewares/postRentalValidation.js";

const rentRouter = Router();

rentRouter.get('/rentals', getRentals)
rentRouter.post('/rentals', postRentalValidation, postRental)
rentRouter.post('/rentals/:id/return', checkRentalByID, postReturnRental)

export default rentRouter;