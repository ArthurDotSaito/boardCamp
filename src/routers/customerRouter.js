import { Router } from "express";
import { getCustomers } from "../controllers/getCustomers.js";
import { getCustomersByID } from "../controllers/getCustomersByID.js";
import { postCustomers } from "../controllers/postCustomers.js";
import { customerValidation } from "../middlewares/postCustomersValidation.js";

const customerRouter = Router();

customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers/:id", getCustomersByID);
customerRouter.post("/customers", customerValidation, postCustomers);
customerRouter.put("/customers");

export default customerRouter;