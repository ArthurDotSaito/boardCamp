import { Router } from "express";

const customerRouter = Router();

customerRouter.get("/customers");
customerRouter.get("/customers/:id");
customerRouter.post("/customers");
customerRouter.put("/customers");

export default customerRouter;