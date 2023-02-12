import { Router } from "express";
import { getRentals } from "../controllers/getRentals.js";
import { postDeleteRental } from "../controllers/postDeleteRental.js";
import { postRental } from "../controllers/postRental.js";
import { postReturnRental } from "../controllers/postReturnRental.js";
import { checkRentalByID_delete } from "../middlewares/checkRentalByID_delete.js";
import { checkRentalByID_return } from "../middlewares/checkRentalByID_return.js";
import { postRentalValidation } from "../middlewares/postRentalValidation.js";

const rentRouter = Router();

rentRouter.get('/rentals', getRentals);
rentRouter.post('/rentals', postRentalValidation, postRental);
rentRouter.delete('/rentals/:id', checkRentalByID_delete, postDeleteRental);
rentRouter.post('/rentals/:id/return', checkRentalByID_return, postReturnRental);

export default rentRouter;