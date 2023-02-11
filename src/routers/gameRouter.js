import { Router } from "express";
import {getGames} from "../controllers/getGames.js";
import { postGames } from "../controllers/postGames.js";
import {postGamesValidation} from '../middlewares/postGamesValidation.js'

const gameRouter = Router();

gameRouter.get("/games", getGames);
gameRouter.post("/games",postGamesValidation, postGames);

export default gameRouter;