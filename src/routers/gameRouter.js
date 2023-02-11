import { Router } from "express";
import {getGames} from "../controllers/getGames.js";

const gameRouter = Router();

gameRouter.get("/games", getGames);
gameRouter.post("/games");

export default gameRouter;