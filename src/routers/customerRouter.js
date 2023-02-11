import { Router } from "express";
import { getCustomers } from "../controllers/getCustomers.js";
import { getCustomersByID } from "../controllers/getCustomersByID.js";

const customerRouter = Router();

customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers/:id", getCustomersByID);
customerRouter.post("/customers");
customerRouter.put("/customers");

export default customerRouter;